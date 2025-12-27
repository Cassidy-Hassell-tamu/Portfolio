import { themeClasses } from '../constants/theme'

/**
 * ProjectHighlight Component
 * 
 * Justification for extraction:
 * - Repeating element: Each project card has identical structure (title, stack, description)
 * - Single Responsibility: Encapsulates project card presentation logic
 * - Reusability: Can be used in different contexts (projects list, featured projects, etc.)
 * - Maintainability: Changes to card styling only need to be made in one place
 * - Testability: Easier to test a single component in isolation
 * - Scalability: Easy to extend with additional props (image, links, tags) without affecting parent
 * 
 * Props:
 * @param {string} title - Project title
 * @param {string[]} stack - Array of technologies used in the project
 * @param {string} description - Project description
 */
function ProjectHighlight({ title, stack, description }) {
  return (
    <article className={`${themeClasses.bg.projectCard} rounded-xl p-6`}>
      <h3 className={`${themeClasses.fontSize.cardTitle} font-bold ${themeClasses.text.primary} mb-2`}>
        {title}
      </h3>
      {stack && stack.length > 0 && (
        <div className="mb-3">
          <ul className="flex flex-wrap gap-2" role="list">
            {stack.map((tech, index) => (
              <li key={index}>
                <span className={`${themeClasses.fontSize.small} ${themeClasses.text.primary} px-2.5 py-1 bg-white/70 rounded hover:scale-130 transition-transform duration-200 cursor-default`}>
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className={`${themeClasses.fontSize.body} ${themeClasses.text.primary}`}>
        {description}
      </p>
    </article>
  )
}

export default ProjectHighlight

