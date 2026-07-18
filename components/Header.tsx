import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 border-b border-[var(--border)]/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h7l-1 8 11-13h-7l0-7z" fill="#04141a" />
            </svg>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-[#e7f5f3]">ClinicForce</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <Link href="#" className="hover:text-white transition">Product</Link>
          <Link href="#" className="hover:text-white transition">Company</Link>
          <Link href="#" className="hover:text-white transition">Pricing</Link>
          <Link href="#" className="hover:text-white transition">Docs</Link>
          <Link href="#" className="hover:text-white transition">Changelog</Link>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <Link href="#" className="hidden sm:inline text-[var(--muted)] hover:text-white transition">
            Log in
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-[#04141a] font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}