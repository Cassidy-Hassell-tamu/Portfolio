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
    background: 'bg-background',
    primary: 'bg-primary',
    primaryContainer: 'bg-primaryContainer',
    secondary: 'bg-secondary',
    secondaryContainer: 'bg-secondaryContainer',
    secondaryLight: 'bg-secondaryLight',
    secondaryLightContainer: 'bg-secondaryLightContainer',
    neutral: 'bg-neutral',
    neutralContainer: 'bg-neutralContainer',
  },
  text: {
    dark: 'text-textDark',
    light: 'text-textLight',
    primary: 'text-primary',
    onPrimary: 'text-onPrimary',
    primaryContainer: 'text-onPrimaryContainerText',
    primaryContainerDark: 'text-onPrimaryContainerDark',
    primaryContainerLight: 'text-onPrimaryContainerLight',
    secondary: 'text-onSecondary',
    secondaryContainer: 'text-onSecondaryContainerText',
    secondaryLight: 'text-onSecondaryLight',
    secondaryLightContainer: 'text-onSecondaryLightContainer',
    neutral: 'text-neutral',
    neutralContainer: 'text-onNeutralContainer',
  },
  border: {
    primary: 'border-primary',
    secondary: 'border-secondary',
    secondaryLight: 'border-secondaryLight',
    neutral: 'border-neutral',
  },
  ring: {
    primary: 'ring-primary',
    secondary: 'ring-secondary',
    secondaryLight: 'ring-secondaryLight',
    neutral: 'ring-neutral',
  },
  fontSize: {
    // Hero section - largest, most prominent
    heroHeading: 'text-2xl md:text-3xl', // 2.25rem / 3.75rem - Main hero title
    heroSubtitle: 'text-lg md:text-xl', // 1.125rem / 1.25rem - Hero description
    
    // Section headings
    sectionHeading: 'text-2xl md:text-3xl', // 1.875rem / 2.25rem - Section titles (h2)
    // Card and article titles
    cardTitle: 'text-xl', // 1.25rem - Card/article titles (h3)
    // Body text - default paragraph text
    body: 'text-base', // 1rem - Regular body text
    // Small text - captions, metadata, tech stacks
    small: 'text-sm', // 0.875rem - Small text for captions and metadata
    // Navigation - nav links and brand names
    navigation: 'text-xl', // 1.25rem - Navigation links 
    name: 'text-xl', // 1.25rem - Brand names
  },
}

