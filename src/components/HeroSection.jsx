import { themeClasses } from '../constants/theme'
import SectionContainer from './SectionContainer'

const base = import.meta.env.BASE_URL || '/';

function HeroSection() {
  return (
    <SectionContainer id="home" className="bg-4stars-primary">
      <div className="flex flex-col md:flex-row items-start gap-8 py-12 min-h-[320px] md:min-h-[400px]">
        <div className="flex-shrink-0 w-40 md:w-56 aspect-[0.8/1] bg-neutralContainer rounded-2xl flex items-center justify-center overflow-hidden mr-0 md:mr-8">
          <img src={`${base}Headshot.jpg`} alt="Headshot of Cassidy Hassell" className="w-full h-full object-cover rounded-2xl" style={{ aspectRatio: '0.8 / 1' }} />
        </div>
        <div className="flex-1 flex flex-col items-start">
          <span className="text-sm text-neutral mb-2">Hi, I'm Cassidy</span>
          <h1 className="text-2xl md:text-3xl font-bold text-textDark mb-6">Junior CS Undergrad @ TAMU</h1>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80 mb-4`}>
            Computer science honors student passionate about building robust software and tackling complex problems.
          </p>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80 mb-6`}>
            I've had experience with full-stack development, algorithms, and team projects. My studio art minor also helps me with visual clarity and communication.
          </p>
          <a
            href={`${base}Resume.pdf`}
            className="inline-flex items-center px-5 py-2 rounded-full bg-secondaryContainer text-onSecondaryContainer font-semibold hover:bg-secondaryContainer transition text-sm"
            download
          >
            Resume
            <img src={`${base}download.svg`} alt="Download icon" className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

