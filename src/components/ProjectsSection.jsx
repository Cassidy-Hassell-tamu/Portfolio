import SectionContainer from './SectionContainer'
import SectionHeading from './SectionHeading'
import ProjectHighlight from './ProjectHighlight'

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Bookstore Desktop Application',
      description: 'Project Description',
      stack: ['Python', 'MySQL', 'SqlAlchemy', 'Flask']
    },
    {
      id: 2,
      title: 'Panda Express POS System Web App',
      description: 'Project Description',
      stack: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS', 'Agile Development']
    },
    {
      id: 3,
      title: 'Loam: Grocery & Expiration Tracking',
      description: 'Project Description',
      stack: ['Node.js', 'PostgreSQL', 'Express', 'React', 'Typescript']
    }
  ]

  return (
    <SectionContainer id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectHighlight
            key={project.id}
            title={project.title}
            stack={project.stack}
            description={project.description}
            image={project?.image}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection

