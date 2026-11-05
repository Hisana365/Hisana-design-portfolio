import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 font-semibold">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li key={i} className="rounded-full border border-line px-3 py-1 text-sm">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
