/**
 * Theme constants for the portfolio
 * Centralized color and typography definitions for maintainability and scalability
 */
export const theme = {
  colors: {
    background: '#F0FEF8',
    primary: '#386E55',
    projectCard: '#C6F6D5',
    accent: '#E30000',
    accentLight: '#F3D0D0',
    textDark: '#122C26',
  }
}

/**
 * Font sizing system using semantic names
 * Uses rem-based sizing (relative units) for better accessibility and scalability
 * Responsive variants included where appropriate
 * 
 * Usage guidelines:
 * - heroHeading: Main hero title (h1) - largest, most prominent text
 * - heroSubtitle: Hero description/subtitle - secondary hero text
 * - sectionHeading: Section titles (h2) - major section headers
 * - cardTitle: Card/article titles (h3) - titles within content cards
 * - body: Regular body text - default paragraph text
 * - small: Small text - captions, metadata, tech stacks
 * - navigation: Navigation links and brand names - nav bar text
 */
export const themeClasses = {
  bg: {
    background: 'bg-[#F0FEF8]',
    primary: 'bg-[#386E55]',
    projectCard: 'bg-[#C6F6D5]',
    accentLight: 'bg-[#F3D0D0]',
  },
  text: {
    dark: 'text-[#122C26]',
    primary: 'text-[#386E55]',
    accent: 'text-[#E30000]'
  },
  border: {
    primary: 'border-[#386E55]',
    accentLight: 'border-[#E39090]', 
  },
  ring: {
    primary: 'ring-[#386E55]',
  },
  fontSize: {
    // Hero section - largest, most prominent
    heroHeading: 'text-2xl md:text-3xl', // 2.25rem / 3.75rem - Main hero title
    heroSubtitle: 'text-lg md:text-xl', // 1.125rem / 1.25rem - Hero description
    
    // Section headings
    sectionHeading: 'text-3xl md:text-4xl', // 1.875rem / 2.25rem - Section titles (h2)
    
    // Card and article titles
    cardTitle: 'text-xl', // 1.25rem - Card/article titles (h3)
    
    // Body text - default paragraph text
    body: 'text-base', // 1rem - Regular body text
    
    // Small text - captions, metadata, tech stacks
    small: 'text-sm', // 0.875rem - Small text for captions and metadata
    
    // Navigation - nav links and brand names
    navigation: 'text-xl', // 1.25rem - Navigation links and brand names
  },
}

