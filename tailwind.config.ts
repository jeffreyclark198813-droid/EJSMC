import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '0 0% 100%',
        foreground: '210 40% 12%',
        card: '0 0% 100%',
        'card-foreground': '210 40% 12%',
        popover: '0 0% 100%',
        'popover-foreground': '210 40% 12%',
        primary: '186 78% 42%',
        'primary-foreground': '0 0% 100%',
        secondary: '210 40% 96%',
        'secondary-foreground': '210 40% 12%',
        muted: '210 40% 96%',
        'muted-foreground': '210 20% 45%',
        accent: '186 78% 96%',
        'accent-foreground': '186 78% 42%',
        destructive: '0 84% 60%',
        'destructive-foreground': '0 0% 100%',
        border: '210 30% 88%',
        input: '210 30% 88%',
        ring: '186 78% 42%',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
