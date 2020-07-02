import React, { FC, useEffect, useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { apiModules } from '~/src/api'
import { ModuleWrapper } from '~/src/components/module-wrapper'

import './styles.scss'

export const Modules: FC = () => {
  const [search, setSearch] = useState('')
  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // handle initial load of modules
  const fetchModules = async () => {
    try {
      const modules_ref: any = await apiModules('')

      setModules(modules_ref.map((item: any) => item))
      setLoading(false)
    } catch (e) {
      if (e) {
        setError(e.message)
        console.log(error)
      }
    }
  }

  // on change of the search input
  const handleSearchChange = async (e: any) => {
    setSearch(e.target.value)

    try {
      const modules_ref: any = await apiModules(e.target.value)
      setModules(modules_ref.map((item: any) => item))
      setLoading(false)
    } catch (e) {
      if (e) {
        setError(e.message)
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchModules()
  }, [])

  return (
    <ModuleWrapper>
      <div className='nav__item module_search px-2 pt-1 pb-4 flex items-center'>
        <div className='w-4 text-primary-text-color'>
          <SearchIconSVG />
        </div>
        <input
          value={search}
          onChange={(e) => handleSearchChange(e)}
          className='w-full ml-2 font-semibold text-xs bg-transparent'
          placeholder='Search modules'
        />
      </div>

      <div>
        <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
          {!loading ? (
            modules.length >= 1 ? (
              modules.map((item: any) => (
                <li key={item.name} className='module__grid_item w-full h-full pb-full relative'>
                  <NavLink
                    to={item.slug}
                    activeClassName='active'
                    className='absolute w-full h-full flex items-center justify-center flex-col'
                    exact={item.exact}
                  >
                    <div className='px-2 py-1 flex items-center justify-center flex-col'>
                      <div className='w-12'>
                        {item?.icon?.component ? <item.icon.component /> : null}
                      </div>
                      <p className='mt-2 font-semibold text-xs'>{item.name}</p>
                    </div>
                  </NavLink>
                </li>
              ))
            ) : (
              <li className='text-xs p-2'>no modules found</li>
            )
          ) : (
            <li>loading modules</li>
          )}
        </ul>
      </div>
    </ModuleWrapper>
  )
}

const SearchIconSVG = () => (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='search'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
  >
    <path
      fill='currentColor'
      d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
    ></path>
  </svg>
)
