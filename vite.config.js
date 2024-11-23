import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.ttf', '**/*.otf'],
  server: {
    port: 3000,
    proxy: { // 카카오 로그인 프록시 추가
        '/api': {
        target: 'https://kapi.kakao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
}
});
