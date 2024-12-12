/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  rules: [
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
  theme: {
    extend: {
      screens: {
        'media-max-650px': {'max': '650px'},
        'media-max-764px': {'max': '764px'},
        'media-max-1440px': {'max': '1440px'},
      },
    },
  },
  plugins: [],
};
