/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4009E',
          50: '#FFE5F6',
          100: '#FFCCED',
          200: '#FF94DA',
          300: '#FF61C8',
          400: '#FF29B4',
          500: '#F4009E',
          600: '#CC0085',
          700: '#A8006D',
          800: '#800053',
          900: '#5C003C',
          950: '#47002E',
        },
        secondary: {
          DEFAULT: '#007CC7',
          50: '#E0F3FF',
          100: '#C2E8FF',
          200: '#85D0FF',
          300: '#42B7FF',
          400: '#059FFF',
          500: '#007CC7',
          600: '#0068A8',
          700: '#00558A',
          800: '#004570',
          900: '#003252',
          950: '#002942',
        },
        accent: {
          DEFAULT: '#FF0000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#D60000',
          700: '#AD0000',
          800: '#850000',
          900: '#5C0000',
          950: '#470000',
        },
        neutral: {
          DEFAULT: '#1D1716',
          50: '#EBE6E5',
          100: '#D7CDCB',
          200: '#B09A97',
          300: '#856A65',
          400: '#51413E',
          500: '#1D1716',
          600: '#1D1716',
          700: '#1D1716',
          800: '#1D1716',
          900: '#1D1716',
          950: '#1D1716',
        },
        'base-100': {
          DEFAULT: '#FFFBF5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFDFA',
          300: '#FFFDFA',
          400: '#FFFBF5',
          500: '#FFFBF5',
          600: '#FFD699',
          700: '#FFB442',
          800: '#E68A00',
          900: '#8F5600',
          950: '#613A00',
        },
        info: {
          DEFAULT: '#00BAD7',
          50: '#E0FBFF',
          100: '#C2F7FF',
          200: '#8AEFFF',
          300: '#4DE7FF',
          400: '#14E0FF',
          500: '#00BAD7',
          600: '#009FB8',
          700: '#008094',
          800: '#006675',
          900: '#004752',
          950: '#003942',
        },
        success: {
          DEFAULT: '#3F8100',
          50: '#EDFFDB',
          100: '#D7FFB3',
          200: '#B0FF66',
          300: '#88FF1A',
          400: '#63CC00',
          500: '#3F8100',
          600: '#367000',
          700: '#2F6100',
          800: '#275200',
          900: '#204200',
          950: '#1E3D00',
        },
        warning: {
          DEFAULT: '#FF7300',
          50: '#FFF1E5',
          100: '#FFE3CC',
          200: '#FFC799',
          300: '#FFAB66',
          400: '#FF8F33',
          500: '#FF7300',
          600: '#D66000',
          700: '#AD4E00',
          800: '#853C00',
          900: '#5C2900',
          950: '#472000',
        },
        error: {
          DEFAULT: '#FF889E',
          50: '#FFF5F7',
          100: '#FFE5EA',
          200: '#FFD1DA',
          300: '#FFB8C5',
          400: '#FF9EB0',
          500: '#FF889E',
          600: '#FF4265',
          700: '#FF002F',
          800: '#BD0023',
          900: '#750016',
          950: '#570010',
        },
      },
    },
  },
  plugins: [],
};
