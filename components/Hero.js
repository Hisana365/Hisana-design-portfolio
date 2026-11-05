import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-12 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
      <div className="crop mx-3 sm:mx-0">
        <p className="text-lg text-mute">{profile.name}, {profile.title} in Dubai</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">{profile.subline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`}
             className="rounded-full bg-ink px-6 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5">
            Email Hisana
          </a>
          <a href="#work" className="px-2 py-3 font-medium underline decoration-magenta decoration-2 underline-offset-4">
            See what I design
          </a>
          {profile.openToWork && <span className="text-sm text-mute">Open to work in the UAE</span>}
        </div>
        {/* Process-colour bars, like a printer's colour strip */}
        <div className="mt-12 flex h-3 w-full max-w-md gap-1" aria-hidden="true">
          {["bg-cyan", "bg-magenta", "bg-yellow", "bg-ink"].map((c, i) => (
            <span key={c} className={`bar flex-1 ${c}`} style={{ animationDelay: `${i * 120}ms` }} />
          ))}
        </div>
        <span className="crop-b" aria-hidden="true" />
      </div>
    </section>
  );
}
