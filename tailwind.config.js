/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xsm':'320px',
        'sm':'500px',
        'md':'700px',
        'lg':'960px',
        'xl':'1200px',
        'xxl':'1400px',
        'max-md': {'max': '767px'},
      },
      colors:{
       mainBg: '#150E28',
       purple:'#903AFF',
       lilac:'#D434FE',
       customWhite:'rgba(255, 255, 255, 0.18)',
       formBg:'rgba(255, 255, 255, 0.03)',
       pink:'#FF26B9',
       footerBg:'#100B20',
       modalBg:'rgba(21, 14, 40, 0.93)'
      },
      backgroundImage:{
        primaryGradient:'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
        timelineGradient:'linear-gradient(270deg, #903AFF 0%, #D434FE 100%)'
      },
      boxShadow:{
        formShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      }
      
    },
  },
  plugins: [],
}
