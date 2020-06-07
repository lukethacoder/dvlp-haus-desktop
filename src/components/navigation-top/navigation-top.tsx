import React from 'react'
import { withRouter } from 'react-router-dom'

import './styles.scss'
import { ChevronLeft, ChevronRight, Sun, Moon } from '~/src/icons'

const NavigationTopMain = (props: any) => {
  console.log('props ', props)
  return (
    <div className='navigation_top flex bg-side-nav-bg'>
      <div className='w-1/2 flex navigation_top__left_side'>
        <div
          className='px-3 cursor-pointer flex w-8 h-8 text-color opacity-100 hover:opacity-50 transition-opacity duration-200 ease-in-out'
          onClick={() => props.history.goBack()}
        >
          <ChevronLeft />
        </div>
        <div
          className='px-3 cursor-pointer flex w-8 h-8 text-color opacity-100 hover:opacity-50 transition-opacity duration-200 ease-in-out'
          onClick={() => props.history.goForward()}
        >
          <ChevronRight />
        </div>
      </div>
      <div className='w-1/2 flex navigation_top__right_side justify-end'>
        <button onClick={() => props.toggleTheme()}>
          <div className='w-8 h-8 px-2 flex items-center text-color opacity-100 hover:opacity-50 transition-opacity duration-200 ease-in-out'>
            {props.theme === 'dark' ? <Sun /> : <Moon />}
          </div>
        </button>
        {/* <div className='user_profile'>
          <div className='user_profile__image'>
            <img
              src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
              alt='user profile image'
            />
          </div>
          <p>User Name</p>
          <p>ARROW</p>
        </div> */}
      </div>
    </div>
  )
}

const NavigationTop = withRouter(NavigationTopMain)

export { NavigationTop }
