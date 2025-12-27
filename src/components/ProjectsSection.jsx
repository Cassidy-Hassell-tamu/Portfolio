import SectionContainer from './SectionContainer'
import SectionHeading from './SectionHeading'
import ProjectHighlight from './ProjectHighlight'

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Project Title',
      description: 'Project Description',
      stack: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Project Title',
      description: 'Project Description',
      stack: ['Node.js', 'Express', 'MongoDB']
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
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection

