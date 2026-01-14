import { themeClasses } from '../constants/theme';

/**
 * TechStackPills Component
 * Renders a list of technology stack items as pill-shaped badges.
 * @param {string[]} stack - Array of technology names
 */
function TechStackPills({ stack, color, bg }) {
  if (!Array.isArray(stack) || stack.length === 0) return null;
  return (
    <div className="mb-3">
      <ul className="flex flex-wrap gap-2" role="list">
        {stack.map((tech, index) => (
          <li key={index}>
            <span className={`${themeClasses.fontSize.small} ${color || themeClasses.text.textDark} px-2.5 py-1 ${bg || 'bg-white/70'} rounded inline-block transition-transform duration-200 hover:scale-105`}>
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechStackPills;
