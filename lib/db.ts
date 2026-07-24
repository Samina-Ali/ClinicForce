import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

let initialized = false;

export async function initDb() {
  if (initialized) return;

  await db.execute(`
    CREATE TABLE IF NOT EXISTS patients (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      date_of_birth TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      address TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      patient_id TEXT NOT NULL,
      original_filename TEXT NOT NULL,
      stored_filename TEXT NOT NULL,
      file_path TEXT NOT NULL,
      file_size INTEGER NOT NULL,
      uploaded_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (patient_id) REFERENCES patients(id)
    )
  `);

  initialized = true;
}

export default db;
