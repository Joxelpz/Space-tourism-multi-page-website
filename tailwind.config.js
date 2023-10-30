/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { 'min': '375px' },
      md: { 'min': '768px' },
      lg: { 'min': '1280px' },
      xl: { 'min': '1728px' },
    },
    fontFamily: {
      'barlow': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif'],
    },
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9", 
        white: "#FFFFFF",
        "white-opacity": "#FFFFFF50",
        "white-opacity-25": "#FFFFFF25"
      }, 
      backgroundImage: {
        'home-lg': "url('../public/assets/home/background-home-desktop.jpg')",
        'home-md': "url('../public/assets/home/background-home-tablet.jpg')",
        'home-sm': "url('../public/assets/home/background-home-mobile.jpg')",
        'destination-lg': "url('../public/assets/destination/background-destination-desktop.jpg')",
        'destination-md': "url('../public/assets/destination/background-destination-tablet.jpg')",
        'destination-sm': "url('../public/assets/destination/background-destination-mobile.jpg')",
        'crew-lg': "url('../public/assets/crew/background-crew-desktop.jpg')",
        'crew-md': "url('../public/assets/crew/background-crew-tablet.jpg')",
        'crew-sm': "url('../public/assets/crew/background-crew-mobile.jpg')",
        'technology-lg': "url('../public/assets/technology/background-technology-desktop.jpg')",
        'technology-md': "url('../public/assets/technology/background-technology-tablet.jpg')",
        'technology-sm': "url('../public/assets/technology/background-technology-mobile.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    boxShadow: {
      'button': '0 0 0 88px #FFFFFF50',
    },
    fontSize: {
      'heading-1': ['150px', {
        lineHeight: 'normal',
      }],
      'heading-1/2': ['80px', {
        lineHeight: 'normal',
      }],
      'heading-2': ['100px', {
        lineHeight: 'normal',
      }],
      'heading-3': ['56px', {
        lineHeight: 'normal',
      }],
      'heading-40': ['40px', {
        lineHeight: 'normal',
      }],
      'heading-4': ['32px', {
        lineHeight: 'normal',
      }],
      'heading-5': ['28px', {
        letterSpacing: '4.725px',
        lineHeight: 'normal',
      }],
      'heading-6': ['24px', {
        lineHeight: 'normal',
      }],
      'heading-7': ['20px', {
        lineHeight: 'normal',
      }],
      'heading-8': ['16px', {
        lineHeight: 'normal',
      }],
      
      'subheading-1': ['28px', {
        lineHeight: 'normal',
      }],
      'subheading-2': ['14px', {
        letterSpacing: '2.362px',
        lineHeight: 'normal',
      }],
      'nav': ['16px', {
        letterSpacing: '2.7px',
        lineHeight: 'normal',
      }],
      'paragraf': ['18px', {
        lineHeight: '32px',
      }],
    },
  },
  plugins: [],
}

