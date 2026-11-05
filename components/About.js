import Section from "./Section";
import { about, languages } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="max-w-prose space-y-4 font-display text-lg leading-8">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Languages</h3>
          <ul className="divide-y divide-line border-y border-line text-sm">
            {languages.map(([l, level]) => (
              <li key={l} className="flex justify-between gap-3 py-2"><span>{l}</span><span className="text-right text-mute">{level}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
