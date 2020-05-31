import React, { FC } from 'react'

import { ModuleSearch } from '../module-search'
import { IReactRouterLink } from '~/src/types/global'
import { NavigationItem } from '~/src/components/navigation-item'

import './styles.scss'

const HomeIconSVG: FC = () => (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='far'
    data-icon='home'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 576 512'
    className='svg-inline--fa fa-home fa-w-18 fa-3x'
  >
    <path
      fill='currentColor'
      d='M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z'
    ></path>
  </svg>
)

const FavIconSVG: FC = () => (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='far'
    data-icon='star'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 576 512'
    className='svg-inline--fa fa-star fa-w-18 fa-3x'
  >
    <path
      fill='currentColor'
      d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
      className=''
    ></path>
  </svg>
)

// TODO: proper home page, for now it will just be a grid view of the modules
const static_routes: IReactRouterLink[] = [
  {
    slug: '/',
    name: 'Home',
    exact: true,
    icon: {
      component: HomeIconSVG,
    },
  },
  {
    slug: '/favs',
    name: 'Favourites',
    exact: true,
    icon: {
      component: FavIconSVG,
    },
  },
  // {
  //   slug: '/modules',
  //   name: 'Modules',
  // },
]

const NavigationSide = () => (
  <div className='w-full navigation__side'>
    <nav>
      <ul>
        {static_routes.map((link) => (
          <li key={link.slug}>
            <NavigationItem {...link} />
          </li>
        ))}
      </ul>
      <hr className='my-4 mx-0' />
      <ul>
        <ModuleSearch />
      </ul>
    </nav>
  </div>
)

export { NavigationSide }
