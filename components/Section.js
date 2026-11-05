export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20">
      <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
