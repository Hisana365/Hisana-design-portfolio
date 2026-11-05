import { profile } from "@/data/content";

const links = [["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold">{profile.name}</a>
        <ul className="flex gap-4 text-sm text-mute sm:gap-6">
          {links.map(([label, href]) => (
            <li key={href} className={label === "Skills" ? "hidden sm:block" : ""}>
              <a href={href} className="transition-colors hover:text-magenta">{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
