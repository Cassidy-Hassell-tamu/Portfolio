function AboutSection() {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML/CSS',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'UI/UX Design'
  ]

  return (
    <section 
      id="about" 
      className="py-24 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                I'm a passionate developer and designer with a focus on creating 
                beautiful, accessible, and performant web experiences. I enjoy 
                working with modern technologies and best practices to build 
                solutions that make a difference.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design, 
                ensuring that every project not only functions flawlessly but also 
                provides an exceptional user experience.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Core Skills
            </h3>
            <ul className="grid grid-cols-2 gap-3" role="list">
              {skills.map((skill, index) => (
                <li key={index}>
                  <span className="block px-4 py-3 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200 text-center">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

