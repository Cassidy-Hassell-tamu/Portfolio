import { text } from "express"

/**
 * Theme constants for the portfolio
 * Centralized color and typography definitions for maintainability and scalability
 */
export const theme = {
  colors: {
    background: '#FFFFFF',
    textDark: '#000000',
    textLight: '#FFFFFF',

    primary: '#386E55',
    onPrimary: '#FFFFFF',
    primaryContainer: '#B5E9D1',
    onPrimaryContainerText: '#000000',
    onPrimaryContainerDark: '#122C26',
    onPrimaryContainerLight: '#386E55',

    secondary: '#ff4f23',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FF7F5E',
    onSecondaryContainer: '#410001',
    onSecondaryContainerText: '#000000',

    neutral: '#636262',
    onNeutral: '#FFFFFF',
    neutralContainer: '#EBEBEB',
    onNeutralContainer: '#000000',
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
    background: `bg-[${theme.colors.background}]`,

    primary: `bg-[${theme.colors.primary}]`,
    primaryContainer: `bg-[${theme.colors.primaryContainer}]`,

    secondary: `bg-[${theme.colors.secondary}]`,
    secondaryContainer: `bg-[${theme.colors.secondaryContainer}]`,

    neutral: `bg-[${theme.colors.neutral}]`,
    neutralContainer: `bg-[${theme.colors.neutralContainer}]`,
  },
  text: {
    dark: `text-[${theme.colors.textDark}]`,
    light: `text-[${theme.colors.textLight}]`,

    primary: `text-[${theme.colors.onPrimary}]`,
    primaryContainer: `text-[${theme.colors.onPrimaryContainerText}]`,
    primaryContainerDark: `text-[${theme.colors.onPrimaryContainerDark}]`,
    primaryContainerLight: `text-[${theme.colors.onPrimaryContainerLight}]`,

    secondary: `text-[${theme.colors.onSecondary}]`,
    secondaryContainer: `text-[${theme.colors.onSecondaryContainer}]`,

    neutral: `text-[${theme.colors.neutral}]`,
    neutralContainer: `text-[${theme.colors.onNeutralContainer}]`,
  },
  border: {
    primary: `border-[${theme.colors.primary}]`,
    secondary: `border-[${theme.colors.secondary}]`,
    neutral: `border-[${theme.colors.neutral}]`,
  },
  ring: {
    primary: `ring-[${theme.colors.primary}]`,
    secondary: `ring-[${theme.colors.secondary}]`,
    neutral: `ring-[${theme.colors.neutral}]`,
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

