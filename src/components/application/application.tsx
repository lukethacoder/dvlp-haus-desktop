import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Resizable } from 're-resizable'

import { routes } from './routes'
import { NavigationTop } from '../navigation-top'
import { NavigationSide } from '../navigation-side'

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
          <button onClick={() => setThemeColor(themeColor === 'dark' ? 'light' : 'dark')}>
            toggle theme
          </button>
          <NavigationSide />
        </Resizable>
        <section className='application__section'>
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
