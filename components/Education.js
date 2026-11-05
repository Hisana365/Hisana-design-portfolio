import Section from "./Section";
import { education, certifications } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-semibold">Education</h3>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.name}><p className="font-medium">{e.name}</p><p className="text-sm text-mute">{e.school}</p></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name}><p className="font-medium">{c.name}</p><p className="text-sm text-mute">{c.issuer}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
