import React from 'react'
import { themeClasses } from '../constants/theme'

/**
 * FlagBubble Component
 * Displays a floating status flag bubble, with options for color, size, and position.
 *
 * Props:
 * @param {string} label - The flag text
 * @param {string} [color] - Optional color class (defaults to secondaryContainer)
 * @param {string} [bg] - Optional background class (defaults to secondaryContainer)
 * @param {string} [border] - Optional border class (defaults to none)
 * @param {string} [size] - Font size class (defaults to small)
 * @param {object} [style] - Additional inline styles
 */
function FlagBubble({ label, color, bg, border, size, style }) {
  return (
    <span
      className={`rounded-full px-3 py-1 ${size || themeClasses.fontSize.small} ${color || themeClasses.text.secondaryContainer} ${bg || themeClasses.bg.secondaryContainer} ${border || ""}`}
      style={{
        minWidth: 'fit-content',
        ...style,
      }}
    >
      {label}
    </span>
  )
}

export default FlagBubble
