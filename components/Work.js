import Section from "./Section";
import { work } from "@/data/content";

export default function Work() {
  return (
    <Section id="work" title="Featured work">
      <div className="grid gap-8 sm:grid-cols-2">
        {work.map((w) => (
          <article key={w.title} className="border-t-4 border-ink pt-4 transition-colors hover:border-magenta">
            {w.image && <img src={w.image} alt={w.title} className="mb-4 w-full rounded" />}
            <h3 className="font-display text-2xl font-semibold">{w.title}</h3>
            <p className="mt-1 text-sm text-mute">{w.role}</p>
            <p className="mt-3">{w.text}</p>
            <p className="mt-3 text-sm text-mute">Made with {w.tools.join(", ")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
