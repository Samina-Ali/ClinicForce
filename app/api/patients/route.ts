import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import db, { initDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await initDb();

    const body = await req.json();
    const { firstName, lastName, dateOfBirth, email, phone, address } = body;

    if (!firstName || !lastName || !dateOfBirth || !email) {
      return NextResponse.json(
        { error: "firstName, lastName, dateOfBirth, and email are required" },
        { status: 400 }
      );
    }

    const id = uuidv4();

    await db.execute({
      sql: `INSERT INTO patients (id, first_name, last_name, date_of_birth, email, phone, address)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [id, firstName, lastName, dateOfBirth, email, phone ?? null, address ?? null],
    });

    return NextResponse.json({ id }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create patient" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await initDb();

    const result = await db.execute(
      `SELECT id, first_name, last_name, email, created_at FROM patients ORDER BY created_at DESC`
    );

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch patients" }, { status: 500 });
  }
}
