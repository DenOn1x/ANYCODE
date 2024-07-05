import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // server: {
    //     port: 6666,
    // },
    build: {
        assetsInlineLimit: Number.MAX_SAFE_INTEGER,
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