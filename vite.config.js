import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import postcss from "postcss";
import { createHtmlPlugin } from "vite-plugin-html";
import autoprefixer from "autoprefixer";
const testEnv = "http://localhost/dist/";
const prodEnv =
  "https://sebnoret.github.io/portfolio/generateur-de-citations/demo/";
export default defineConfig({
  base: testEnv,
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
    createHtmlPlugin({
      minify: true, // Active la minification des fichiers HTML
      collapseWhitespace: true, // Réduit les espaces vides
      removeComments: true, // Supprime les commentaires
    }),
  ],
});
