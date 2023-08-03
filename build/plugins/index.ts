import react from '@vitejs/plugin-react-swc'

import UnoCSS from 'unocss/vite'
import unplugin from './unplugin'

export function setupVitePlugins(viteEnv) {
  const plugins = [UnoCSS(), react(), unplugin(viteEnv)]

  return plugins
}
