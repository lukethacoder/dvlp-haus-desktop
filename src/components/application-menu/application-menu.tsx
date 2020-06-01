import React, { FC } from 'react'

import { Logo, MenuBars } from './icons'
import './styles.scss'

export const ApplicationMenu: FC = () => (
  <div className='app_menu w-full flex items-center justify-center'>
    {/* <div>
      <div className='menu_btn flex items-center justify-center rounded-sm'>
        <MenuBars />
      </div>
    </div> */}
    <div className='logo_wrapper flex items-center'>
      <Logo />
    </div>
  </div>
)
