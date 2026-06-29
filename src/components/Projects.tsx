const projects = [
  {
    title: "Pequliar",
    description: "ASO design for rare genetic diseases",
    tags: [],
    link: "/projects/pequliar",
  },
  {
    title: "Jaunt",
    description: "A crypto token for RNA neuroactives",
    tags: [],
    link: "https://www.etherealjaunt.com/",
  },
  {
    title: "Ribozymes",
    description: "The first organisms on earth",
    tags: [],
    link: "#",
  },
  {
    title: "Pianobiology",
    description: "Biology-inspired music",
    tags: [],
    link: "#",
  },
  {
    title: "Living Code",
    description: "RNA-based consumer products",
    tags: [],
    link: "https://livingcode.bio/",
  },
  {
    title: "Phylo",
    description: "Social breeding of AI agents",
    tags: [],
    link: "https://phylo.space/",
  },
  {
    title: "CD19-CAR mRNA Design",
    description: "Computational optimization of IVT mRNA for CAR-T therapy",
    tags: [],
    link: "/car",
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
              className="group block p-4 bg-white rounded-lg border border-border hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">
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
