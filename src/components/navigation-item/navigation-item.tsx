import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { IReactRouterLink } from '~/src/types/global'

import './styles.scss'

export const NavigationItem: FC<IReactRouterLink> = (item) => (
  <NavLink to={item.slug} activeClassName='active' className='nav__item flex' exact={item.exact}>
    <div className='px-2 py-1 flex items-center'>
      <div className='w-4'>{item?.icon?.component ? <item.icon.component /> : null}</div>
      <p className='nav__item_name ml-2 font-semibold text-xs'>{item.name}</p>
    </div>
  </NavLink>
)
