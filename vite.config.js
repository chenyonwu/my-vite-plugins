import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Legacy from '@vitejs/plugin-legacy';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import autoprefixer from 'autoprefixer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Compression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    Legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: false,
      resolvers: [ElementPlusResolver()],
    }),
    Compression(),
    WindiCSS(),
  ],
  css: {
    postcss: [autoprefixer],
  },
})
