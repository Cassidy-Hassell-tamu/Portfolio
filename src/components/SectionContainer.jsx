import { themeClasses } from '../constants/theme'

/**
 * SectionContainer Component
 * 
 * Justification for extraction:
 * - Repeated pattern: Multiple sections (Hero, Projects, Footer) use identical container structure
 * - Consistency: Ensures uniform spacing, padding, and max-width across all sections
 * - DRY principle: Eliminates duplicate className strings across components
 * - Maintainability: Centralized container styling - change once, applies everywhere
 * - Responsive design: Consistent responsive behavior across all sections
 * - Scalability: Easy to add new sections with consistent styling
 * 
 * Props:
 * @param {string} id - Section ID for navigation
 * @param {string} padding - Vertical padding variant ('large' for py-8, 'small' for py-4, default 'small')
 * @param {string} maxWidth - Max width variant ('narrow' for max-w-4xl, 'wide' for max-w-6xl, default 'narrow')
 * @param {React.ReactNode} children - Section content
 */
function SectionContainer({ id, padding = 'small', maxWidth = 'narrow', children, className = ''}) {
  const paddingClass = padding === 'none' ? '' : padding === 'small' ? 'py-4' : 'py-8'
  const maxWidthClass = maxWidth === 'wide' ? 'max-w-6xl' : 'max-w-4xl'

  return (
    <section
      id={id}
      className={`${themeClasses.bg.background} px-4 ${paddingClass} ${className}`}
    >
      <div className={`container mx-auto ${maxWidthClass}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer

