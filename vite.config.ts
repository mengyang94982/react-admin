import {defineConfig} from 'vite'

import {setupVitePlugins} from './build'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: setupVitePlugins(),
})
