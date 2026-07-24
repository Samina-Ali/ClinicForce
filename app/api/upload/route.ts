import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";
import db, { initDb } from "@/lib/db";

const uploadsDir = path.join(process.cwd(), "uploads");

export async function POST(req: NextRequest) {
  try {
    await initDb();

    const formData = await req.formData();
    const patientId = formData.get("patientId") as string | null;
    const files = formData.getAll("files") as File[];

    if (!patientId) {
      return NextResponse.json({ error: "patientId is required" }, { status: 400 });
    }
    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    // Confirm the patient exists
    const patientResult = await db.execute({
      sql: `SELECT id FROM patients WHERE id = ?`,
      args: [patientId],
    });
    if (patientResult.rows.length === 0) {
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }

    const patientDir = path.join(uploadsDir, patientId);
    if (!fs.existsSync(patientDir)) {
      fs.mkdirSync(patientDir, { recursive: true });
    }

    const saved = [];

    for (const file of files) {
      if (file.type !== "application/pdf") {
        return NextResponse.json(
          { error: `${file.name} is not a PDF` },
          { status: 400 }
        );
      }

      const docId = uuidv4();
      const storedFilename = `${docId}.pdf`;
      const filePath = path.join(patientDir, storedFilename);

      const bytes = await file.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(bytes));

      await db.execute({
        sql: `INSERT INTO documents (id, patient_id, original_filename, stored_filename, file_path, file_size)
              VALUES (?, ?, ?, ?, ?, ?)`,
        args: [docId, patientId, file.name, storedFilename, filePath, file.size],
      });

      saved.push({ id: docId, originalFilename: file.name });
    }

    return NextResponse.json({ uploaded: saved }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
