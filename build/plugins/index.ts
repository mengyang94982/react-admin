import react from '@vitejs/plugin-react-swc'

import unocss from '@unocss/vite';


export function setupVitePlugins() {
  const plugins = [
    react(),
    unocss()
  ]

  return plugins
}