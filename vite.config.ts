import { defineConfig, loadEnv } from 'vite'

import { getRootPath, getSrcPath, setupVitePlugins } from './build'

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
    server: {
      port: 7001,
      open: true
    },
    plugins: setupVitePlugins(viteEnv)
  }
})
