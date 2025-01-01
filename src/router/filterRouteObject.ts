import { CustomRouteObject } from './index'

type Role = 'admin' | 'user'

function hasRoleAccess(role: Role, auth: Role[]) {
  if (auth && Array.isArray(auth)) {
    return auth.includes(role)
  }

  return true
}

export default function filterRouteObject(routeConfig: CustomRouteObject[], role: Role) {
  const result = routeConfig
    .filter(route => {
      let isPassed = true

      if (route.meta) {
        isPassed = hasRoleAccess(role, route.meta.auth)
      }

      return isPassed
    })
    .map(({ meta: _meta, ...route }) => {
      const menu = route

      if (menu.children) menu.children = filterRouteObject(menu.children, role)

      return menu
    })

  return result
}
