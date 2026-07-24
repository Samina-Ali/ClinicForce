"use client";

import { useState, useRef } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function IntakeForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files).filter((f) => f.type === "application/pdf");
    setFiles((prev) => [...prev, ...selected]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      // Step 1: create the patient record
      const patientRes = await fetch("/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!patientRes.ok) {
        const data = await patientRes.json();
        throw new Error(data.error || "Failed to save identity info");
      }

      const { id: patientId } = await patientRes.json();

      // Step 2: upload files, if any were selected
      if (files.length > 0) {
        const uploadData = new FormData();
        uploadData.append("patientId", patientId);
        files.forEach((f) => uploadData.append("files", f));

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (!uploadRes.ok) {
          const data = await uploadRes.json();
          throw new Error(data.error || "Failed to upload files");
        }
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", dateOfBirth: "", email: "", phone: "", address: "" });
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const inputClass =
    "w-full bg-white/[0.03] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[#e7f5f3] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--teal)]/50 focus:ring-1 focus:ring-[var(--teal)]/30 transition";

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-10 max-w-xl mx-auto text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--green)]/15 text-[var(--green)] flex items-center justify-center text-2xl mb-4">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold mb-2 text-[#e7f5f3]">Submission received</h3>
        <p className="text-sm text-[var(--muted)] mb-6">
          Your information and documents were submitted successfully.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-white/[0.03] border border-[var(--border)] px-5 py-2 rounded-lg text-sm hover:bg-white/[0.06] hover:border-[var(--teal)]/40 transition"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 max-w-xl mx-auto">
      <h3 className="font-display text-xl font-semibold mb-1 text-[#e7f5f3]">Patient intake</h3>
      <p className="text-sm text-[var(--muted)] mb-6">
        Enter your details and upload any relevant medical history PDFs.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-[var(--muted)] mb-1.5">First name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] mb-1.5">Last name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-[var(--muted)] mb-1.5">Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] mb-1.5">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 555-0100"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs text-[var(--muted)] mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="jane@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs text-[var(--muted)] mb-1.5">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className={inputClass}
          placeholder="123 Main St, Seattle, WA"
        />
      </div>

      {/* File upload */}
      <div className="mb-6">
        <label className="block text-xs text-[var(--muted)] mb-1.5">Medical history (PDF)</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border border-dashed border-[var(--border)] rounded-lg px-4 py-6 text-center cursor-pointer hover:border-[var(--teal)]/50 hover:bg-white/[0.02] transition"
        >
          <p className="text-sm text-[var(--muted)]">Click to select PDF files</p>
          <p className="text-xs text-[var(--muted-2)] mt-1">Multiple files allowed</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />

        {files.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {files.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-xs bg-white/[0.03] border border-[var(--border)] rounded-lg px-3 py-2"
              >
                <span className="text-[var(--muted)] truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-[var(--muted-2)] hover:text-[var(--teal)] transition ml-2"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 mb-4">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-[#04141a] font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
