/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        textDark: '#000000',
        textLight: '#FFFFFF',
        primary: '#386E55',
        onPrimary: '#FFFFFF',
        primaryContainer: '#ccf6e3',
        onPrimaryContainerText: '#000000',
        onPrimaryContainerDark: '#122C26',
        onPrimaryContainerLight: '#386E55',
        secondary: '#ff4f23',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#FF7F5E',
        onSecondaryContainer: '#410001',
        onSecondaryContainerText: '#ffffff',
        secondaryLight: '#ffab90',
        onSecondaryLight: '#000000',
        secondaryLightContainer: '#ffd0c5',
        onSecondaryLightContainer: '#000000', 
        neutral: '#636262',
        onNeutral: '#FFFFFF',
        neutralContainer: '#F4F4F4',
        onNeutralContainer: '#000000',
      },
    },
  },
  plugins: [],
}

