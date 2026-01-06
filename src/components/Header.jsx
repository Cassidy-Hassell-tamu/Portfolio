import { themeClasses } from '../constants/theme'

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={themeClasses.bg.background}>
      <nav className="container mx-auto px-4 py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className={`${themeClasses.fontSize.navigation} font-bold ${themeClasses.text.textDark} focus:outline-none focus:ring-2 ${themeClasses.ring.primary} focus:ring-offset-2 rounded`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            Cassidy Hassell
          </a>
          
          <a 
            href="#projects" 
            className={`px-4 py-2 ${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer} rounded-full focus:outline-none focus:ring-2 ${themeClasses.ring.primary} focus:ring-offset-2`}
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

