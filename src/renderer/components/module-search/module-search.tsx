import React, { useEffect, useState } from 'react'
import { API_modules } from '../../api'

const ModuleSearch = () => {
  const [search, setSearch] = useState('')
  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // handle initial load of modules
  const fetchModules = async () => {
    console.log('fetchModules()')
    try {
      const modules_ref: any = await API_modules('')

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
      const modules_ref: any = await API_modules(e.target.value)
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
    <div>
      <input value={search} onChange={(e) => handleSearchChange(e)} />
      <ul>
        {!loading ? (
          modules.length >= 1 ? (
            modules.map((item: any) => <li key={item.default.name}>{item.default.name}</li>)
          ) : (
            <p>no modules found related to '{search}'</p>
          )
        ) : (
          <p>loading modules</p>
        )}
      </ul>
    </div>
  )
}

export { ModuleSearch }
