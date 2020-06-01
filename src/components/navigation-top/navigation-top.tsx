import React from 'react'

import './styles.scss'

const NavigationTop = () => {
  return (
    <div className='navigation_top flex bg-side-nav-bg'>
      <div className='w-1/2 flex navigation_top__left_side'>
        <p>{'<'}</p>
        <p>{'>'}</p>
        <p>H - Home</p>
      </div>
      <div className='w-1/2 flex navigation_top__right_side'>
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

export { NavigationTop }
