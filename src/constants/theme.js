/**
 * Theme constants for the portfolio
 * Centralized color definitions for maintainability and scalability
 */
export const theme = {
  colors: {
    background: '#E7FFF4',
    primary: '#386E55',
    projectCard: '#C6F6D5',
  }
}

/**
 * Helper function to generate Tailwind classes with theme colors
 * Usage: className={`bg-${theme.colors.background}`} won't work with Tailwind
 * Instead, use: className={theme.bg.background}
 */
export const themeClasses = {
  bg: {
    background: 'bg-[#E7FFF4]',
    primary: 'bg-[#386E55]',
    projectCard: 'bg-[#C6F6D5]',
  },
  text: {
    dark: 'text-[#122C26]',
    primary: 'text-[#386E55]',
  },
  border: {
    primary: 'border-[#386E55]',
  },
  ring: {
    primary: 'ring-[#386E55]',
  },
}

