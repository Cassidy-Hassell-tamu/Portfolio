import { themeClasses } from '../constants/theme'
import SectionContainer from './SectionContainer'
import SideBubbles from './SideBubbles';

const base = import.meta.env.BASE_URL || '/';

function HeroSection() {
  return (
    <SectionContainer id="home" className="bg-4stars-primary">
      <div className="flex flex-col md:flex-row items-start gap-8 py-12 min-h-[320px] md:min-h-[400px]">
        <div className="flex-shrink-0 w-40 md:w-56 aspect-[0.8/1] bg-neutralContainer rounded-2xl flex items-center justify-center overflow-hidden mr-0 md:mr-8">
          <img src={`${base}Headshot.jpg`} alt="Headshot Photo of Cassidy Hassell" className="w-full h-full object-cover rounded-2xl" style={{ aspectRatio: '0.8 / 1' }} />
        </div>
        <div className="flex-1 flex flex-col items-start">
          <span className="text-med text-neutral mb-2">Hi, I'm Cassidy</span>
          <h1 className="text-2xl md:text-3xl font-bold text-textDark mb-6">Junior CS Undergrad @ TAMU</h1>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80 mb-4`}>
            Honors student passionate about learning new technologies and solving complex problems. Take a look at what I've been up to below for an accurate snapshot of what I'm learning or working on right now! 
          </p>
          <p className={`${themeClasses.fontSize.heroSubtitle} ${themeClasses.text.dark} opacity-80 mb-6`}>
            My tutoring position at the TAMU Math Learning Center helps me to practice my communication and problem-solving skills. My studio art minor drives my appreciation for good design and my understanding of how people interact with the visual world.
          </p>
          <a
            href={`${base}Resume_CassidyHassell.pdf`}
            className="inline-flex items-center px-5 py-2 rounded-full bg-secondaryContainer text-onSecondaryContainer font-semibold hover:bg-secondaryContainer transition text-sm"
            download
          >
            Resume
            <img src={`${base}download.svg`} alt="Download icon" className="w-4 h-4 ml-2" />
          </a>
          {/* Show SideBubbles inline on mobile only */}
          <div className="flex md:hidden">
            <SideBubbles inline />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

