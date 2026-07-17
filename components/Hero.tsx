export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-fade" />
      <div className="orb orb-teal w-[420px] h-[420px] -top-20 left-1/4" />
      <div className="orb orb-blue w-[380px] h-[380px] top-0 right-1/4" />
      <div className="orb orb-green w-[260px] h-[260px] top-40 left-1/2 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6 text-[#e7f5f3]">
          ClinicForce:
          <br />
          Connecting <span className="gradient-text">Patients, Providers, Perseverence</span>
        </h1>

        <p className="max-w-xl mx-auto text-[var(--muted)] text-lg mb-10">
          Data is worth more than we are aware of. ClinicForce optimizes patient-provider encounters by leveraging AI tools like personalized advocates
        </p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="#"
            className="bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-[#04141a] font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition"
          >
            Try it locally
          </a>
          <a
            href="#"
            className="bg-white/[0.03] border border-[var(--border)] px-6 py-3 rounded-lg text-sm flex items-center gap-2 hover:bg-white/[0.06] hover:border-[var(--teal)]/40 transition"
          >
            View on GitHub
          </a>
        </div>
        <p className="text-xs text-[var(--muted-2)]">2.4k stars · 500+ active installs</p>
      </div>

      {/* App mockup */}
      <div className="relative max-w-6xl mx-auto px-4 pb-28">
        <div className="glass glow-teal rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[var(--teal)] to-[var(--blue)]" />
                <span className="font-display font-medium">Current</span>
              </div>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="text-[var(--muted)]">Ops Team</span>
              <span className="text-[var(--muted-2)]">/</span>
              <span>Lead Sync Automation</span>
            </div>
            <div className="hidden sm:flex items-center gap-5 text-sm text-[var(--muted)]">
              <span className="text-white border-b-2 border-[var(--teal)] pb-3 -mb-3">Build</span>
              <span>Settings</span>
              <span>Help</span>
              <span>Share</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="relative flex-1 min-h-[420px] px-6 py-8 grid-fade">
              <div
                className="float absolute left-4 top-6 w-56 glass glow-teal rounded-xl p-3"
                style={{ "--r": "-1deg" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <span className="w-5 h-5 rounded bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-xs">
                    ◧
                  </span>
                  File Watcher
                </div>
                <div className="text-xs text-[var(--muted)] flex items-center gap-1.5">
                  <span className="pulse-dot" /> New file in folder
                </div>
              </div>

              <div
                className="float absolute left-1/2 -translate-x-1/2 top-24 w-56 glass glow-blue rounded-xl p-3"
                style={{ "--r": "1deg", animationDelay: "-2s" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <span className="w-5 h-5 rounded bg-[var(--blue)]/20 text-[var(--blue)] flex items-center justify-center text-xs">
                    ▦
                  </span>
                  CSV Parser
                </div>
                <div className="text-xs text-[var(--muted)]">Converts rows to objects</div>
              </div>

              <div
                className="float absolute right-4 top-40 w-56 glass glow-teal rounded-xl p-3"
                style={{ "--r": "1deg", animationDelay: "-3s" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <span className="w-5 h-5 rounded bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-xs">
                    ⇪
                  </span>
                  CRM Sync
                </div>
                <div className="text-xs text-[var(--muted)]">Writes to local CRM instance</div>
              </div>
            </div>

            <div className="w-full lg:w-[360px] border-t lg:border-t-0 lg:border-l border-[var(--border)] flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
                <div>
                  <div className="text-sm font-medium">Running · Lead Sync Automation</div>
                  <div className="text-xs text-[var(--muted-2)] font-mono">Last run · Jul 17, 09:08:11</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--green)]/15 text-[var(--green)] flex items-center gap-1.5">
                  <span className="pulse-dot" /> Running
                </span>
              </div>
              <div className="flex-1 px-4 py-3 font-mono text-[11px] leading-relaxed text-[var(--muted)] overflow-y-auto max-h-[300px]">
                <div className="log-line">
                  <span className="text-[var(--muted-2)]">09:08:11</span> Initializing automation &quot;Lead Sync&quot;
                </div>
                <div className="log-line">
                  <span className="text-[var(--muted-2)]">09:08:12</span> Parsed 122 rows in 241ms
                </div>
                <div className="log-line text-[var(--blue)]">
                  <span className="text-[var(--muted-2)]">09:08:13</span> Deduplication complete — 4 ignored
                </div>
                <div className="log-line text-[var(--green)]">
                  <span className="text-[var(--muted-2)]">09:08:13</span> 115 new leads written to local CRM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
