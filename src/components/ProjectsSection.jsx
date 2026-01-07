import SectionContainer from './SectionContainer'
import SectionHeading from './SectionHeading'
import ProjectHighlight from './ProjectHighlight'
import { projects } from '../constants/projects'


function ProjectsSection() {

  return (
    <SectionContainer id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectHighlight
            key={project.id}
            title={project.title}
            stack={project.stack}
            description={project.shortDescription}
            image={project?.image}
            flags={project?.flags}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection

