import { themeClasses } from '../constants/theme'

/**
 * SectionHeading Component
 * 
 * Justification for extraction:
 * - Consistent styling: Section headings (h2) share identical typography and spacing
 * - Semantic HTML: Ensures proper heading hierarchy and accessibility
 * - Reusability: Can be used across multiple sections (Projects, About, Contact, etc.)
 * - Maintainability: Centralized heading styles - update once, applies everywhere
 * - Scalability: Easy to add new sections with consistent heading appearance
 * - Accessibility: Ensures consistent heading structure for screen readers
 * 
 * Props:
 * @param {string} children - Heading text content
 * @param {string} className - Additional CSS classes (optional)
 */
function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`${themeClasses.fontSize.sectionHeading} font-semibold ${themeClasses.text.dark} mb-8 ${className}`}>
      {children}
    </h2>
  )
}

export default SectionHeading

