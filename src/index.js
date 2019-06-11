// Dependencias necesarias de la APP
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

// Layout de la APP
import AppLayout from './components/layout'

// Páginas
import Inicio from './pages/inicio'
import Referenciadores from './pages/referenciadores'
import NotFound from './pages/404'

// Estilos de la APP
import '../assets/scss/main.scss'

// Limpio el storage para obtener todo otra vez :)
sessionStorage.clear()
function noop() {}
if (process.env.NODE_ENV !== 'development') {
  console.log = noop
  console.warn = noop
  console.error = noop
}
const AppRoute = ({
  component: Component,
  layout: Layout,
  ...params // De ser necesario parametros personalizados a la vista, se los pasa
}) => (
  <Route
    {...params}
    render={(props) => {
      return (
        <Layout history={props.history}>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

const routes = (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <AppRoute
          exact
          path='/goleadores'
          layout={AppLayout}
          component={Inicio}
        />
        <Route
          path='/goleadores'
          render={(props) => {
            return sessionStorage.getItem('iddt') !== null ? (
              <AppLayout history={props.history}>
                <Referenciadores {...props} />
              </AppLayout>
            ) : (
              <Redirect
                to={{
                  pathname: '/goleadores',
                  state: { from: props.location },
                }}
              />
            )
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))

module.hot.accept()
