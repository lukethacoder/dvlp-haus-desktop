import React, { FC } from 'react'

import { ModuleWrapper } from '~/src/components/module-wrapper'
import { add } from `~/rust/lib.rs`

const RustExample: FC = () => {
  function calcFromRust() {
    console.log('add ', add(3, 7))
  }

  return (
    <ModuleWrapper>
      <h3>RustExample</h3>
      <button onClick={calcFromRust}>calc rust</button>
    </ModuleWrapper>
  )
}

export { RustExample }
