import * as React from 'react'
import { NavigationTop } from '../navigation-top'
import { NavigationSide } from '../navigation-side'

const Application = () => {
  return (
    <div className='application__container'>
      <NavigationSide />
      <section>
        <NavigationTop />
        <main>{/* child routes go here  */}</main>
      </section>
    </div>
  )
}

export { Application }
