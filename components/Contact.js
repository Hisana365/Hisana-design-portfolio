import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "linkedin.com/in/hisana", profile.linkedin],
  ];
  return (
    <Section id="contact" title="Let's work together">
      <p className="mb-8 max-w-xl text-lg text-mute">
        Hiring for a design role in the UAE? Send a message and I'll reply with my portfolio and CV.
      </p>
      <dl className="max-w-xl divide-y divide-line border-y border-line">
        {rows.map(([k, v, href]) => (
          <div key={k} className="flex justify-between gap-4 py-3">
            <dt className="text-mute">{k}</dt>
            <dd><a href={href} className="font-medium underline decoration-magenta underline-offset-4">{v}</a></dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 py-3"><dt className="text-mute">Based in</dt><dd>{profile.location}</dd></div>
      </dl>
      <footer className="mt-16 text-sm text-mute">© {new Date().getFullYear()} {profile.name}</footer>
    </Section>
  );
}
