import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E7FFF4]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

