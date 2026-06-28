import Link from "next/link";

export default function PequliarPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-white/80 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">
            &larr; Back
          </Link>
          <span className="text-lg font-semibold tracking-tight">Pequliar</span>
          <span className="w-12" />
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center justify-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-3">Pequliar</h1>
        <p className="text-muted text-sm mb-12 max-w-2xl text-center">
          ASO design for rare genetic diseases
        </p>

        <div className="flex gap-6">
          <a
            href="https://pequliar.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-10 py-6 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all text-center"
          >
            <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
              Public
            </h2>
          </a>
          <Link
            href="/projects/pequliar/ido"
            className="group block px-10 py-6 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all text-center"
          >
            <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
              Ido
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
}
