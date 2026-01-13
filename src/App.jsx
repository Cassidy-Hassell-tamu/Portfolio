import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

import CurrentSection from './components/CurrentSection'
import Footer from './components/Footer'
import { themeClasses } from './constants/theme'

import HomePage from './components/HomePage';
import { MainContentProvider, useMainContent } from './hooks/MainContentContext';

function MainContentArea() {
  const { content: Content } = useMainContent();
  // Content is a React component (not an element)
  return <>{Content && <Content />}</>;
}

function App() {
  return (
    <MainContentProvider initialComponent={HomePage}>
      <div className={`min-h-screen flex flex-col ${themeClasses.bg.background}`}>
        <Header />
        <main className="flex-grow">
          <MainContentArea />
        </main>
        <Footer />
      </div>
    </MainContentProvider>
  );
}

export default App;

