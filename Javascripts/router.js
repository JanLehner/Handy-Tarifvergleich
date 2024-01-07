/*Dieser Router ist keine Eigenleistung, ich habe ihn aus dem Modul 294 übernommen.*/
export class Router {
  constructor(routes) {
    this.routes = routes
    this.navigate = function (hash) {
      let route = this.getRouteByHash(hash)
      history.pushState({}, '', hash)
      const id = route.id
      route.function(id)
    }

    this.urlResolve = function () {
      this.navigate(location.hash)
    }

    this.getRouteByHash = (hash) => {
      if (hash === '') {
        return routes['login']
      }
      let route = routes['error']
      Object.keys(routes).forEach((key) => {
        if (routes[key].hash === hash) {
          route = routes[key]
        }
      })
      return route
    }

    addEventListener('hashchange', (event) => {
      this.urlResolve()
    })
  }
}
