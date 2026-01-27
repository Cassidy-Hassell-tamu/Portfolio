import { Link } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import ProjectHighlight from './ProjectHighlight';
import { projects } from '../constants/projects';

const base = import.meta.env.BASE_URL || '/';

function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`${base}projects/${project.id}`}
            className="block text-left w-full bg-transparent border-none p-0"
            style={{ textDecoration: 'none' }}
          >
            <ProjectHighlight
              title={project.title}
              stack={project.stack}
              description={project.shortDescription}
              image={project?.image}
              flags={project?.flags}
            />
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;

