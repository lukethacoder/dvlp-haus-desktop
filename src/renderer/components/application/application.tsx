import React, { useState } from 'react'
import { NavigationTop } from '../navigation-top'
import { NavigationSide } from '../navigation-side'
import { Resizable } from 're-resizable'

const Application = () => {
  const [sideNavWidth, setSideNavWidth] = useState(196)
  const [themeColor, setThemeColor] = useState('dark')

  return (
    <div className={`application__container ${themeColor}`}>
      <Resizable
        size={{ width: sideNavWidth, height: 'auto' }}
        onResizeStop={(e: any, direction: any, ref: any, d: any) => {
          setSideNavWidth(sideNavWidth + d.width)
        }}
      >
        <button onClick={() => setThemeColor(themeColor === 'dark' ? 'light' : 'dark')}>toggle theme</button>
        <NavigationSide />
      </Resizable>
      <section className='application__section'>
        <NavigationTop />
        <main>{/* child routes go here  */}</main>
      </section>
    </div>
  )
}

export { Application }
