const projects = [
  {
    title: "Project One",
    description:
      "A brief description of this project and what it does. Replace with your actual project details.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Explain the problem it solves and the tech used.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "One more project to showcase your work. Add as many as you like.",
    tags: ["Python", "Machine Learning"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold tracking-tight mb-12">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block p-6 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-bg-alt rounded-md text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
