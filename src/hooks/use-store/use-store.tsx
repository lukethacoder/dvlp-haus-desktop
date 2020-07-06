import React, { useState } from 'react'

// Hook
export function useStore(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Save to local storage
      window.api.send('get-value', { key: key })

      // Get from local storage by key
      return window.api.receive('got-value', (data) => {
        if (data.value) {
          // Save state
          setStoredValue(data.value)
          return data.value
        } else {
          return initialValue
        }
      })
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (key, value) => {
    try {
      // Send event to main.js
      window.api.send('set-value', { key: key, value: value })

      // Successfully saved value - return event from main.js
      window.api.receive('set-value-main', (data) => {
        // Save state
        setStoredValue(data.value)

        return data.value
      })
    } catch (error) {
      setStoredValue('')
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
