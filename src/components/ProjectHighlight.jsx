import { themeClasses } from '../constants/theme'
import FlagBubble from './FlagBubble'

const base = import.meta.env.BASE_URL || '/';

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
 * @param {string} [image] - Optional image URL for the project
 * @param {string[]} [flags] - Optional array of status flags to display
 */
import { useState } from 'react'
import TechStackPills from './TechStackPills'

function ProjectHighlight({ title, stack, description, image, flags }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  return (
    <article className={`${themeClasses.bg.primaryContainer} rounded-xl p-6 relative overflow-visible`}>
      {/* Status Flags */}
      {Array.isArray(flags) && flags.length > 0 && (
        <div className="absolute -top-3 -right-4 flex flex-row-reverse gap-2 z-10">
          {flags.map((flag, idx) => (
            <FlagBubble key={idx} label={flag} color={themeClasses.text.onPrimary} bg={themeClasses.bg.primary}/>
          ))}
        </div>
      )}
      {/* Main Card Content */}
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h3 className={`${themeClasses.fontSize.cardTitle} font-bold ${themeClasses.text.primaryContainerLight} mb-2`}>
            {title}
          </h3>
          {/* Tech Stack */}
          <TechStackPills stack={stack} />
          <div className={`${themeClasses.fontSize.body} ${themeClasses.text.primaryContainerDark} space-y-2 mb-4`}>
            <p>{description}</p>
          </div>
        </div>
        {/* Image Section */}
        {image && (
          <div className="flex items-center justify-center mt-0">
            <img
              src={`${base}${image}`}
              alt={title + ' project screenshot'}
              className="rounded-xl object-contain w-full max-w-full h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setPreviewOpen(true)}
              title="Click to preview"
            />
          </div>
        )}
      </div>
      {/* Image Preview Modal */}
      {previewOpen && image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 cursor-zoom-out"
          onClick={() => setPreviewOpen(false)}
        >
          <img
            src={image}
            alt={title + ' project screenshot preview'}
            className="rounded-xl max-w-[90vw] max-h-[90vh] shadow-2xl border-2 border-white"
            style={{ background: 'white' }}
          />
        </div>
      )}
    </article>
  )
}

export default ProjectHighlight

