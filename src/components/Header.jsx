function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-[#E7FFF4]">
      <nav className="container mx-auto px-4 py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-bold text-[#386E55] focus:outline-none focus:ring-2 focus:ring-[#386E55] focus:ring-offset-2 rounded"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            Cassidy Hassell
          </a>
          
          <a 
            href="#projects" 
            className="px-4 py-2 bg-[#386E55] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#386E55] focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('projects')
            }}
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header

