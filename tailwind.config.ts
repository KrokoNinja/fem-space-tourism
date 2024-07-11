import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        dark: {
          DEFAULT: '#0B0D17',
        },
        light: {
          DEFAULT: '#D0D6F9',
        },
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        'barlow-condensed': ['var(--font-barlow-condensed)'],
        bellefair: ['var(--font-bellefair)'],
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '28px',
        xl: '32px',
        '2xl': '56px',
        '3xl': '100px',
        '4xl': '144px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('/destination/background-destination-mobile.jpg')",
      },
      spacing: {
        '22': '5.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
