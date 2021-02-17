import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '/@': path.resolve(__dirname, './src')
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        },
        hmr: {
            overlay: false
        }
    },
    optimizeDeps: {
        include: [
            'element-plus/lib/locale/lang/zh-cn',
            'dayjs/locale/zh-cn.js',
            'dayjs'
        ]
    }
})