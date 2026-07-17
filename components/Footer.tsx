export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]/60">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-2)]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[var(--teal)] to-[var(--blue)]" />
          <span className="font-display text-[#e7f5f3]">Current</span>
        </div>
        <p>Open source, MIT licensed.</p>
      </div>
    </footer>
  );
}