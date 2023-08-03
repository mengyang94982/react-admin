import path from 'path'

/**
 * 获取项目根路径
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

export function getSrcPath(srcName = 'src') {
  const rootPath = getRootPath()
  return `${rootPath}/${srcName}`
}
