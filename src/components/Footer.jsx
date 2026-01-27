import { themeClasses } from '../constants/theme'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${themeClasses.bg.background} px-4 py-8`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-0 w-full">
          <p className={`text-sm ${themeClasses.text.primary} text-center sm:text-left`}>
            © Cassidy Hassell {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

