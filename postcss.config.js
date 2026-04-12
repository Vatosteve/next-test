// Tailwind v4 uses @tailwindcss/postcss instead of the tailwindcss plugin directly.
// autoprefixer is no longer needed — v4 handles vendor prefixes internally.
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
