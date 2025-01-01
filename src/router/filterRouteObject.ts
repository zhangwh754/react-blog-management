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

      if (isPassed && route.children) {
        const filteredChildren = filterRouteObject(route.children, role)

        route.children = filteredChildren
      }

      return isPassed
    })
    .map(({ meta: _meta, ...route }) => route)

  return result
}
