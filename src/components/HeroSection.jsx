import { themeClasses } from '../constants/theme'
import SectionContainer from './SectionContainer'

function HeroSection() {
  return (
    <SectionContainer id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className={`${themeClasses.fontSize.heroHeading} font-bold mb-4 ${themeClasses.text.dark}`}>
            My title here...
          </h1>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80`}>
            My short description...
          </p>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img src="/Headshot.jpg" alt="Headshot of Cassidy Hassell" className="rounded-3xl w-full max-w-md aspect-square object-cover" />
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

