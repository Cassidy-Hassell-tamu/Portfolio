import { themeClasses } from '../constants/theme'
import SectionContainer from './SectionContainer'

function HeroSection() {
  return (
    <SectionContainer id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className={`${themeClasses.fontSize.heroHeading} italic mb-4 ${themeClasses.text.dark}`}>
            Hi, I’m Cassidy Hassell.
          </h1>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80 mb-4`}>
            Computer science honors student focused on software development, with a studio art minor that gives me a 
            stronger eye for layout and visual clarity.
          </p>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80`}>
            My coursework and projects are grounded in CS, and I’ve added design fundamentals like color theory, graphic 
            design, and self-taught Figma work so I can communicate ideas and interfaces clearly to both engineers and designers.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img src="/Headshot.jpg" alt="Headshot of Cassidy Hassell" className="rounded-3xl w-full max-w-sm aspect-square object-cover" />
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

