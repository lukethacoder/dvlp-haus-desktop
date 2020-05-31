import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { apiModules } from '../../api'

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
        <input value={search} onChange={(e) => handleSearchChange(e)} className='w-full' />
      </li>
      {!loading ? (
        modules.length >= 1 ? (
          modules.map((item: any) => (
            <li key={item.name}>
              <Link to={`/${item.slug}`}>
                <div>
                  {item?.icon?.svg !== undefined ? (
                    <img src={`data:image/svg+xml;utf8,${item.icon.svg}`} />
                  ) : null}
                  {item.name}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>no modules found related to "{search ? search : ' '}"</p>
        )
      ) : (
        <p>loading modules</p>
      )}
    </Fragment>
  )
}

export { ModuleSearch }
