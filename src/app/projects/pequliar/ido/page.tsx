import Link from "next/link";

const items = [
  {
    title: "EIC Accelerator Package",
    description: "Step 1 application for the European Innovation Council Accelerator programme.",
    href: "/pequliar/eic_accelerator.html",
  },
  {
    title: "Manufacturing Case",
    description: "Proportionate manufacturing standards analysis for ASO therapeutics.",
    href: "/pequliar/manufacturing_case.html",
  },
  {
    title: "Disease Landscape",
    description: "Interactive t-SNE visualization of the rare disease landscape.",
    href: "/pequliar/disease_landscape.html",
  },
  {
    title: "Organization Registry",
    description: "555 rare disease organizations cross-referenced with ASO amenability data.",
    href: "/pequliar/org_registry.html",
  },
];

export default function PequliarIdoPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-white/80 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/projects/pequliar" className="text-sm text-muted hover:text-primary transition-colors">
            &larr; Back
          </Link>
          <span className="text-lg font-semibold tracking-tight">Pequliar</span>
          <span className="w-12" />
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-3">Pequliar</h1>
        <p className="text-muted text-sm mb-12 max-w-2xl">
          ASO design platform for rare disease. Machine learning pipeline that predicts antisense oligonucleotide amenability across all pathogenic variants.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
