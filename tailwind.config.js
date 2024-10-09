/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //Pimary colors scale
        primary_1: '#FAE0E4',
        primary_2: '#F7CAD0',
        primary_3: '#F9BEC7',
        primary_4: '#FBB1BD',
        primary_5: '#FF99AC',
        primary_6: '#FF85A1',
        primary_7: '#FF7096',
        primary_8: '#FF5C8A',
        primary_9: '#FF477E',
        primary_10: '#FF0A54',

        //Secondary colors scale
        secondary_1: '#50B9EE',
        secondary_2: '#3FB2EC',
        secondary_3: '#2CAAEA',
        secondary_4: '#17A2E8',
        secondary_5: '#0099E6',
        secondary_6: '#008FD7',
        secondary_7: '#007AB8',
        secondary_8: '#005F8F',
        secondary_9: '#004466',
        secondary_10: '#003E5D'
      }
    }
  },

  plugins: []
}
