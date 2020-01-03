import * as React from 'react'
import { NavigationTop } from '../navigation-top'
import { NavigationSide } from '../navigation-side'
import { TestFileSystem } from '../../modules/index'
import { API_modules } from '../../api'

const Application = () => {

  let modules_data = API_modules();
  console.log('modules_data => ', modules_data)
  
  return (
    <div className='application__container'>
      {/* <HelloWorld /> */}
      <NavigationSide />
      <section>
        <NavigationTop />
        <main>
          {/* child routes go here  */}
        </main>
      </section>
    </div>
  )
}

export { Application }
