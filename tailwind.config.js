/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED'
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669'
        },
        accent: '#F59E0B',
        monster: {
          purple: '#9333EA',
          green: '#10B981', 
          blue: '#3B82F6',
          orange: '#F97316',
          pink: '#EC4899',
          yellow: '#FBBF24',
          // Mad scientist theme colors
          toxic: '#39FF14',
          slime: '#00FF66',
          blood: '#FF3000',
          electric: '#00FFFF',
          rust: '#8B4513',
          acid: '#BFFF00',
          bone: '#F0EAD6',
          shadow: '#1E0030',
          metal: '#71797E',
          bubbling: '#05FFD2'
        },
        surface: {
          50: '#f8fafc',   // Lightest
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',  // Added
          500: '#64748b',  // Added
          600: '#475569',  // Added
          700: '#334155',  // Added
          800: '#1e293b',  // Added
          900: '#0f172a'   // Darkest
      },
      backgroundImage: {
        'lab-surface': 'linear-gradient(to right, #1a1a1a, #2a2a2a, #1a1a1a)',
        'tube-gradient': 'linear-gradient(to bottom, #05FFD2, #39FF14)',
        'electricity': 'linear-gradient(to right, #00FFFF, #0000FF)',
        'metal-texture': 'linear-gradient(45deg, #71797E, #A5A5A5, #71797E)',
        'rust-metal': 'linear-gradient(45deg, #8B4513, #A55D35, #8B4513)'
      },
      animation: {
        'bubble': 'bubble 2s infinite ease-in-out',
        'spark': 'spark 1.5s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'jitter': 'jitter 0.5s infinite ease-in-out',
        'smoke': 'smoke 10s infinite ease-in-out',
        'rotate': 'rotate 20s linear infinite'
          600: '#475569',  // Added
          700: '#334155',  // Added
          800: '#1e293b',  // Added
          900: '#0f172a'   // Darkest
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lab': '0 0 15px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.2)',
        'beaker': 'inset 0 0 20px rgba(5, 255, 210, 0.3), 0 0 15px rgba(5, 255, 210, 0.5)',
        'bolt': '0 0 10px rgba(255, 204, 0, 0.7)',
        'electrode': '0 0 30px rgba(0, 255, 255, 0.8)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(57, 255, 20, 0.4)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'lab-surface': 'linear-gradient(to right, #1a1a1a, #2a2a2a, #1a1a1a)',
        'tube-gradient': 'linear-gradient(to bottom, #05FFD2, #39FF14)',
        'electricity': 'linear-gradient(to right, #00FFFF, #0000FF)',
        'metal-texture': 'linear-gradient(45deg, #71797E, #A5A5A5, #71797E)',
        'rust-metal': 'linear-gradient(45deg, #8B4513, #A55D35, #8B4513)'
      },
      animation: {
        'bubble': 'bubble 2s infinite ease-in-out',
        'spark': 'spark 1.5s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'jitter': 'jitter 0.5s infinite ease-in-out',
        'smoke': 'smoke 10s infinite ease-in-out',
        'rotate': 'rotate 20s linear infinite'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}