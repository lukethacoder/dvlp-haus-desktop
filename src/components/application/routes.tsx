/**
 * Handles the Component Route Components
 *
 * - actual route navigation items are handled inside the `navigation-side` component
 */

import React, { FC } from 'react'

import { IModuleConfig } from '~/src/types/global'
import { MODULE_CONFIG } from '~/src/modules'

import { Home } from '../home'

interface IRoute {
  path: string
  exact?: boolean
  main: FC
}

const static_routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/favs',
    main: () => <h2 className='b-20'>Favourites</h2>,
  },
  {
    path: '/two',
    main: () => <h2 className='b-30'>two</h2>,
  },
]

function moduleConfigToRoutes(): IRoute[] {
  return MODULE_CONFIG.map((module: IModuleConfig) => ({
    path: `/${module.slug}`,
    exact: true,
    main: () => <module.component />,
  }))
}

export const routes = [...static_routes, ...moduleConfigToRoutes()]
