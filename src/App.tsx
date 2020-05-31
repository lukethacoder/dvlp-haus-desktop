import React, { Component } from 'react'
// import Header from './components/header'
// import RustExample from './components/rust-example'
import { Application } from '~/src/components/application'
import { add } from '../rust/lib.rs'

import { ModuleSearch } from '~/src/components/module-search'

class App extends Component {
  calcFromRust() {
    console.log('add ', add(3, 7))
  }

  render() {
    return (
      <div>
        <h1>dvlp.haus</h1>
        <button onClick={this.calcFromRust}>calc rust</button>
        <Application />
        {/* <Header />
        <RustExample /> */}
      </div>
    )
  }
}
export default App
