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
        <button onClick={() => setThemeColor(themeColor === 'dark' ? 'light' : 'dark')}>
          toggle theme
        </button>
        <NavigationSide />
      </Resizable>
      <section className='application__section'>
        <NavigationTop />
        <main>
          <div className='b-10'>b-10</div>
          <div className='b-20'>b-20</div>
          <div className='b-30'>b-30</div>
          <div className='b-40'>b-40</div>
          <div className='b-50'>b-50</div>
          {/* child routes go here  */}
        </main>
      </section>
    </div>
  )
}

export { Application }
