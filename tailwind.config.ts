/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('tailwindcss-preset-px-to-rem')],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#15CA87',
        'secondary-light': '#D8F6EA',
        'secondary-dark': '#04955F',
        primary: '#13B3FE',
        'primary-light': '#DBF3FF',
        'primary-dark': '#028BCC',
        'semantic-red': '#F94721',
        'semantic-pink': '#FFEDEC',
        'semantic-blue': '#3482F8',
        'semantic-yellow': '#FFF6C3',
        'semantic-brown': '#D38200',
        'neutral-100': '#FAFBFD',
        'neutral-200': '#F2F4F8',
        'neutral-300': '#E9EDF2',
        'neutral-400': '#C9CDD1',
        'neutral-500': '#A9ACB0',
        'neutral-600': '#898C8F',
        'neutral-700': '#696B6E',
        'neutral-800': '#4A4B4D',
        'neutral-900': '#2A2B2C',
        'primary-kakao': '#FEE500',
      },
      fontSize: {
        'head-01': [
          '24px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        'head-02': [
          '20px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],

        'body-01': [
          '18px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-02': [
          '18px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-03': [
          '16px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-04': [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-05': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'body-06': [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
        'body-07': [
          '14px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-08': [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'body-09': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'body-10': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
        'body-11': [
          '13px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'body-12': [
          '13px',
          {
            fontWeight: '600',
            lineHeight: '150%',
          },
        ],
        'caption-01': [
          '12px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'caption-02': [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '150%',
          },
        ],
        'caption-03': [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '150%',
          },
        ],
      },
    },
  },
  plugins: [],
};
