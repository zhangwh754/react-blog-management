import { CustomRouteObject } from './index'

type Role = 'admin' | 'user'

function hasRoleAccess(role: Role, auth: Role[]) {
  if (auth && Array.isArray(auth)) {
    return auth.includes(role)
  }

  return true
}

function isMenu(route: CustomRouteObject) {
  return typeof route.meta?.title == 'string'
}

export default function getSideMenuObject(
  routeConfig: CustomRouteObject[],
  role: Role,
  parentKey: string = ''
) {
  const result = routeConfig
    .filter(route => {
      let isPassed = true

      if (route.meta) {
        isPassed = hasRoleAccess(role, route.meta.auth)
      }

      if (!isPassed) return false

      return isMenu(route)
    })
    .map(({ meta, ...route }) => {
      const menu: { [key: string]: any } = {
        key: parentKey + route.path,
        label: (meta as { title: string }).title,
      }

      if (route.children) menu.children = getSideMenuObject(route.children, role, '/' + route.path)

      return menu
    })

  return result
}
