function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Project Title',
      description: 'Project Description',
      stack: 'Tech Stack'
    },
    {
      id: 2,
      title: 'Project Title',
      description: 'Project Description',
      stack: 'Tech Stack'
    }
  ]

  return (
    <section 
      id="projects" 
      className="bg-[#E7FFF4] px-4 py-16"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#386E55] mb-12">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="bg-[#C6F6D5] rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-[#386E55] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#386E55] opacity-80 mb-2">
                {project.stack}
              </p>
              <p className="text-[#386E55]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

