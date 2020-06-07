import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import { Resizable } from 're-resizable'

import { routes } from './routes'
import { NavigationTop } from '../navigation-top'
import { NavigationSide } from '../navigation-side'

import './styles.scss'
import { ApplicationMenu } from '../application-menu'

const Application = () => {
  const [sideNavWidth, setSideNavWidth] = useState(196)
  const [themeColor, setThemeColor] = useState('dark')

  return (
    <Router>
      <div className={`application__container flex ${themeColor}`}>
        <Resizable
          size={{ width: sideNavWidth, height: 'auto' }}
          onResizeStop={(d: any) => {
            setSideNavWidth(sideNavWidth + d.width)
          }}
        >
          <div className='sidebar h-screen overflow-x-hidden overflow-y-auto bg-side-nav-bg'>
            <ApplicationMenu />
            <NavigationSide />
          </div>
        </Resizable>
        <section className='application__section'>
          <button onClick={() => setThemeColor(themeColor === 'dark' ? 'light' : 'dark')}>
            toggle theme
          </button>
          <NavigationTop />
          <main>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
            {/* child routes go here  */}
          </main>
        </section>
      </div>
    </Router>
  )
}

export { Application }
