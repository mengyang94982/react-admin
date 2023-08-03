import Icons from 'unplugin-icons/vite'
import { getSrcPath } from '../utils'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default function unplugin(viteEnv) {
  const { VITE_ICON_LOCAL_PREFIX } = viteEnv
  const srcPath = getSrcPath()
  const localIconPath = `${srcPath}/assets/svg-icon`

  return [
    Icons({ compiler: 'jsx', jsx: 'react' }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [localIconPath],
      // 指定symbolId格式
      symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
      inject: 'body-last',
      customDomId: '__SVG_ICON_LOCAL__'
    })
  ]
}
