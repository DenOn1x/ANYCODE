import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from "vite-svg-loader";

export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const extType = assetInfo.name.split('.').pop();
                    if (/png|jpe?g|gif|svg/i.test(extType)) {
                        return 'assets/images/[name].[hash].[ext]';
                    }
                    return 'assets/[name].[hash].[ext]';
                },
            },
        },
    },
});