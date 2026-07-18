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
          Data is worth more than we are aware of. ClinicForce optimizes patient-provider encounters by leveraging AI tools, and accelerates interactions by providing the right information at the right time!
        </p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="#"
            className="bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-[#04141a] font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition"
          >
            Share your Records with your Healthcare Provider Today
          </a>
          
        </div>
        <p className="text-xs text-[var(--muted-2)]">2.4k stars · 500+ active installs</p>
      </div>

      
    </section>
  );
}
