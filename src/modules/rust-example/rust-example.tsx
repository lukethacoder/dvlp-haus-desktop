import React, { FC } from 'react'
import { add } from `~/rust/lib.rs`

const RustExample: FC = () => {
  function calcFromRust() {
    console.log('add ', add(3, 7))
  }

  return (
    <div>
      <h3 className='text-white'>RustExample</h3>
      <button onClick={calcFromRust}>calc rust</button>
    </div>
  )
}

export { RustExample }
