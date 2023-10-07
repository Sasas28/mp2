import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';
import { resolve } from 'path'; // Import the resolve function

export default defineConfig({
    base: '/mp2/',
    plugins: [pages()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // Your main entry point
                page2: resolve(__dirname, 'checkout.html'), // Path to your additional HTML file
            },
        },
    },
});
