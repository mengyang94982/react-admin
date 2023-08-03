import { defineConfig, loadEnv } from 'vite'

import { setupVitePlugins, getRootPath, getSrcPath } from './build'

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  return {
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: setupVitePlugins(viteEnv)
  }
})

// import {defineConfig} from 'vite'
// import React from '@vitejs/plugin-react-swc'
// import UnoCSS from 'unocss/vite'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     UnoCSS(),
//     React(),
//   ],
// })
