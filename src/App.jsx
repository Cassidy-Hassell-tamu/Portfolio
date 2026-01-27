import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import ProjectsSection from './components/ProjectsSection';
import ProjectPage from './components/ProjectPage';
import SideBubbles from './components/SideBubbles';``
import { themeClasses } from './constants/theme';
import { projects } from './constants/projects';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const base = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${themeClasses.bg.background}`}>
        <Header />
        <SideBubbles />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path={`${base}`} element={<HomePage />} />
            <Route path={`${base}projects`} element={<ProjectsSection />} />
            <Route path={`${base}projects/:id`} element={<ProjectPageWrapper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function ProjectPageWrapper() {
  // Get project id from URL
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === String(id));
  if (!project) return <div className="p-8">Project not found.</div>;
  // Map project fields to ProjectPage props
  return <ProjectPage
    title={project.title}
    description={project.description}
    metadata={project.meta || []}
    problemDefinition={project.problemDefinition}
    painPoints={project.painPoints || []}
    constraints={project.constraints || []}
    solution={project.solution}
    techStack={project.stack || []}
    image={project.image}
    processDescription={project.processDescription || ''}
    process={project.process || []}
    learnedItems={project.whatILearned || []}
    links={project.links || []}
  />;
}

export default App;

