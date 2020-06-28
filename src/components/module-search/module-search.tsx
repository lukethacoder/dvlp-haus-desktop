import React, { useEffect, useState, Fragment } from 'react'

import { apiModules } from '~/src/api'
import { NavigationItem } from '~/src/components/navigation-item'

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

const ModuleSearch = () => {
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
    <Fragment>
      <li>
        <div className='nav__item module_search px-2 py-1 flex items-center'>
          <div className='w-4 text-white'>
            <SearchIconSVG />
          </div>
          <input
            value={search}
            onChange={(e) => handleSearchChange(e)}
            className='w-full ml-2 font-semibold text-xs bg-transparent'
            placeholder='Search modules'
          />
        </div>
      </li>
      {!loading ? (
        modules.length >= 1 ? (
          modules.map((item: any) => (
            <li key={item.name}>
              <NavigationItem {...item} />
            </li>
          ))
        ) : (
          <p className='text-xs p-2'>no modules found</p>
        )
      ) : (
        <p>loading modules</p>
      )}
    </Fragment>
  )
}

export { ModuleSearch }
