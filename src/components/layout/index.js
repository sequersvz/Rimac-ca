import React from 'react'
import Header from './header'
import Footer from './footer'

const AppLayout = ({ children, history }) => (
  <React.Fragment>
    <Header history={history} />
    {children}
    <Footer />
  </React.Fragment>
)

export default AppLayout
