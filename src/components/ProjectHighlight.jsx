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
 * @param {string} [image] - Optional image URL for project highlight
 */
function ProjectHighlight({ title, stack, description, image }) {
  return (
    <article className={`${themeClasses.bg.projectCard} rounded-xl p-6`}>
      <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4">
        <div className="flex-1">
          <h3 className={`${themeClasses.fontSize.cardTitle} font-bold ${themeClasses.text.primary} mb-2`}>
            {title}
          </h3>
          {stack && stack.length > 0 && (
            <div className="mb-3">
              <ul className="flex flex-wrap gap-2" role="list">
                {stack.map((tech, index) => (
                  <li key={index}>
                    <span className={`${themeClasses.fontSize.small} ${themeClasses.text.primary} px-2.5 py-1 bg-white/70 rounded inline-block transition-transform duration-200 hover:scale-105`}>
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
        </div>
        {image && (
          <div className="flex-shrink-0 md:ml-4 mt-4 md:mt-0 flex items-center justify-center">
            <img
              src={image}
              alt={title + ' project screenshot'}
              className="rounded-xl object-cover max-w-[180px] max-h-[140px] shadow-md border border-gray-200 bg-white p-1"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectHighlight

