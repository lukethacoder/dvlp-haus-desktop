import React from 'react'

import { Home } from '../home'

export const routes = [
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
