export const routeTransformToMenu = router => {
  const globalMenu = []
  router.forEach(route => {
    let children = []
    if (route.children && route.children.length > 0) {
      children = routeTransformToMenu(route.children)
    }
    const menuItem = {
      label: route.meta.title,
      key: route.path,
      children: children.length > 0 ? children : null
    }
    if (!route.meta.hide) {
      globalMenu.push(menuItem)
    }
  })

  return globalMenu
}
