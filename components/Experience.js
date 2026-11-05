import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((e) => (
          <li key={e.company} className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="font-display text-xl font-semibold">{e.role}</h3>
              <p>{e.company}</p>
              <p className="text-sm text-mute">{e.place}</p>
              <p className="text-sm text-mute">{e.period}</p>
            </div>
            <ul className="list-disc space-y-2 pl-5 marker:text-magenta">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
