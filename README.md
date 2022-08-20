# my-vite-plugins
Vite项目中用到的常用插件总结

## plugins list

### 1. vite-vue项目生态

- vite
- vue
- @vitejs/plugin-vue
- @vitejs/plugin-vue-jsx
- vue-router
- @vueuse/core
- axios
- element-plus
- pinia
- pinia-plugin-persistedstate

### 2. 浏览器兼容性、环境变量、安全

- lodash-es
- @vitejs/plugin-legacy
- autoprefixer
- cross-env
- increase-memory-limit
- node-html-parser

### 3. 图标库

- @icon-park/vue-next
- vite-plugin-svg-icons

### 4. 常用工具库

- dayjs
- file-saver
- vue-qr
- unplugin-auto-import
- unplugin-vue-components
- vite-plugin-compression

### 5. CSS 样式

- windicss
- postcss
- postcss-html
- postcss-scss
- sass
- vite-plugin-windicss

### 6. Git 仓库

- @commitlint/cli
- @commitlint/config-conventional
- commitizen
- commitlint-config-cz
- cz-customizable
- husky
- lint-staged

### 7. 代码检查与规范

- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- prettier
- stylelint
- stylelint-config-prettier
- stylelint-config-standard
- vue-eslint-parser

## vite-vue项目生态

### 1. vite

Vite项目必需且自带

### 2. vue

Vite+Vue项目必须且自带

### 3. @vitejs/plugin-vue

Vite+Vue项目必须且自带

### 4. @vitejs/plugin-vue-jsx

此插件用于支持在Vue3中使用 jsx/tsx 语法

安装

```powershell
pnpm install @vitejs/plugin-vue-jsx -D
```

配置

```js
//vite.config.js
import VueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
      vue(),
      VueJsx(),
  ]
})
```

### 5. vue-router

Vue Router 是 Vue.js 的官方路由，它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。

安装

```powershell
pnpm install vue-router@4
```

### 6. @vueuse/core

Vue3.0 组合API提供了更多逻辑代码封装的能力。`@vueuse/core`基于组合API封装好用的工具函数，封装了常见的一些交互逻辑。

安装

```powershell
pnpm install @vueuse/core
```

### 7. axios

基于promise可以用于浏览器和nodejs的网络请求库

安装

```powershell
pnpm install axios
```

### 8. element-plus

常用的 Vue3 UI 框架

安装

```powershell
pnpm install element-plus
```

### 9. pinia

Pinia 是 Vue 的存储库，是 Vue3.0 的 Vuex。

它允许我们跨组件/页面共享状态。

安装

```powershell
pnpm install pinia
```

### 10. pinia-plugin-persistedstate

配合pinia，实现 vue 状态管理的持久化。

安装

```powershell
pnpm install pinia-plugin-persistedstate
```

## 浏览器兼容性、环境变量、安全

### 1. lodash-es

在了解`lodash-es`插件之前，要先了解`lodash`插件

Lodash 是一个著名的 JavaScript 原生库，不需要引入其他第三方依赖。

- 是一个意在提高开发者效率,提高JS原生方法性能的JS库。
- 简单的说就是，很多方法lodash已经帮你写好了，直接调用就行，不用自己费尽心思去写了，而且可以统一方法的一致性。
- Lodash使用了一个简单的 _ 符号，就像Jquery的 $ 一样，十分简洁。

`lodash` 是默认的 commonjs 版本，而 `lodash-es` 是 lodash 的 es modules 版本

安装

```powershell
pnpm install lodash-es
```

### 2. @vitejs/plugin-legacy

用于浏览器兼容的插件

Vite 默认的浏览器支持基线是原生ESM。此插件作为不支持原生ESM的传统浏览器提供支持

安装

```powershell
pnpm install @vitejs/plugin-legacy -D
```

配置

```js
//vite.config.js
import Legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
      vue(),
      Legacy({
        targets: ['> 1%, last 1 version, ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        modernPolyfills: true,
      }),
  ]
})
```

### 3. autoprefixer

处理CSS前缀问题的神器。

为兼容所有浏览器，有的CSS属性需要对不同的浏览器加前缀，然而有时添加一条属性，需要添加3~4条类似的属性只是为了满足浏览器的兼容，这不仅会增加许多的工作量，还会使我们的思路被打断。

Autoprefixer是一个后处理程序，可以同Sass，Stylus或Less等预处理器共同使用。

它适用于普通的CSS，我们无需关心要为那些浏览器加前缀，只需全新关注于实现，并使用W3C最新的规范。

安装

```powershell
pnpm install autoprefixer -D
```

配置

```js
//vite.config.js
export default defineConfig({
  plugins: [
      vue(),
  ],
  css: {
      postcss: [require('autoprefixer')],
  },
})
```

### 4. cross-env

用于运行跨平台设置和使用环境变量的脚本

windows不支持NODE_ENV=development的设置方式，cross-env使得我们可以使用单个命令，而不必担心为平台正确设置或使用环境变量。

安装

```powershell
pnpm install cross-env -D
```

### 5. increase-memory-limit

解决node溢出的问题。

在做项目的时候，项目越来越大，后面导致项目无法正常启动，原因是node溢出，解决办法就是安装increate-memory-limit插件。

安装

```powershell
pnpm install increase-memory-limit -D
```

### 6. node-html-parser

将 html 字符串转成 DOM 对象或者 js 对象树，然后进行一些处理/操作。

安装

```powershell
pnpm install node-html-parser -D
```

## 图标库

### 1. @icon-park/vue-next

字节跳动图标库

安装

```powershell
pnpm install @icon-park/vue-next
```

### 2. vite-plugin-svg-icons

通过此插件使用SVG图片

安装

```powershell
pnpm install vite-plugin-svg-icons -D
```

在main.js引入

```js
import 'virtual:svg-icons-register';
```

配置SVG图片文件夹，即`src/assets/icons`

配置

```js
//vite.config.js
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
      vue(),
      createSvgIconsPlugin({
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          symbolId: 'icon-[dir]-[name]',
      }),
  ],
})
```

新建svg封装组件，路径参考`src/components/svg-icon/index.vue`

```vue
<template>
  <svg aria-hidden="true" :width="props.size" :height="props.size">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
  };
</script>

<script setup>
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: () => {
        return '1em';
      },
    },
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
```

按需引入使用

```vue
<template>
	<SvgIcon name="vue" size="200"></SvgIcon>
</template>

<script setup>
    import SvgIcon from '@/components/SgvIcon.vue';
</script>
```

## 常用工具库

### 1. dayjs

一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。

安装

```powershell
pnpm install dayjs
```

### 2. file-saver

客户端保存文件的解决方案，非常适合在客户端生成文件的 Web 应用程序。

安装

```powershell
pnpm install file-saver
```

### 3. vue-qr

vue中使用vue-qr生成漂亮的二维码

安装

```powershell
pnpm install vue-qr -D
```

### 4. unplugin-auto-import

vue3 等插件 hooks 自动引入

支持`vue, vue-router, vue-i18n, @vueuse/core, @vueuse/head`等自动引入

效果

```js
// 引入前
import { ref, computed } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)

//引入后
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

安装

```powershell
pnpm install unplugin-auto-import -D
```

配置

```js
//vite.config.js
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
      AutoImport({
          imports: ['vue', 'vue-router'],
          dts: 'src/auto-import.d.ts',
          resolvers: [ElementPlusResolver()],
      }),
  ],
})
```

### 5. unplugin-vue-components

组件按需自动导入

安装

```powershell
pnpm install unplugin-vue-components -D
```

配置

```js
//vite.config.js
import Components from 'unplugin-vue-components/vite'
// ui库解析器，也可以自定义，需要安装相关UI库，unplugin-vue-components/resolvers
// 提供了以下集中解析器，使用的时候，需要安装对应的UI库，这里以vant示例
// 注释的是包含的其他一些常用组件库，供参考

import {
  // ElementPlusResolver,
  // AntDesignVueResolver,
  VantResolver,
  // HeadlessUiResolver,
  // ElementUiResolver
} from 'unplugin-vue-components/resolvers'

export default  ({ mode }) => defineConfig({
  plugins: [
    Components({
      dirs: ['src/components'], // 目标文件夹
      extensions: ['vue','jsx'], // 文件类型
      dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
      // ui库解析器，也可以自定义，需要安装相关UI库
      resolvers: [
        VantResolver(),
        // ElementPlusResolver(),
        // AntDesignVueResolver(),
        // HeadlessUiResolver(),
        // ElementUiResolver()
      ],
    })
  ]
})

```

### 6. vite-plugin-compression

开启gzip压缩

安装

```powershell
pnpm install vite-plugin-compression -D
```

配置

```js
//vite.config.js
import Compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
      Compression(),
  ],
})
```

## CSS 样式

### 1. windicss

支持windicss语法与使用

安装

```powershell
pnpm install windicss -D
```

自定义配置

```js
//windi.config.js
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: {
    prefix: 'qt:',
  },
});
```

### 2. vite-plugin-windicss

vite中windicss支持

安装

```powershell
pnpm install vite-plugin-windicss -D
```

配置

```js
//vite.config.js
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
      WindiCSS(),
  ],
})
```

### 3. postcss、postcss-html、postcss-scss

post支持

安装

```powershell
pnpm install postcss -D
pnpm install postcss-html -D
pnpm install postcss-scss -D
```

### 4. sass

sass语法支持

安装

```powershell
pnpm install sass -D
```

## Git 仓库

### 1. husky

Git hooks 工具，对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序

```powershell
pnpm install husky -D
```

### 2. lint-staged

检测文件插件，只检测git add . 中暂存区的文件，对过滤出的文件执行脚本

```powershell
pnpm install lint-staged -D
```

### 3. commitlint

文件代码规范，保持多人开发一致编码样式

```powershell
pnpm install @commitlint/cli
pnpm install @commitlint/config-conventional
```

### 4. commitizen

代码提交内容标准化，提示定义输入标准的git commit 内容

```powershell
pnpm install commitizen -D
```

### 5. 剩余部分

参考文章：[Cz工具集使用介绍 - 规范Git提交说明 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903831893966856)

## 代码检查与规范

### 1. eslint

```powershell
pnpm install eslint -D
pnpm install eslint-config-prettier -D
pnpm install eslint-plugin-prettier -D
```

### 2. prettier

```powershell
pnpm install prettier -D
```

### 3. 其它

```powershell
pnpm install stylelint -D
pnpm install stylelint-config-prettier -D
pnpm install stylelint-config-standard -D
pnpm install vue-eslint-
```

