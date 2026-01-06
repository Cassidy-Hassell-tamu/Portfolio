import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

import CurrentSection from './components/CurrentSection'
import Footer from './components/Footer'
import { themeClasses } from './constants/theme'

function App() {
  return (
    <div className={`min-h-screen flex flex-col ${themeClasses.bg.background}`}>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CurrentSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

