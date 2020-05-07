import React, { Component } from 'react'
// import Header from './components/header'
// import RustExample from './components/rust-example'
import { add } from '../rust/lib.rs'

class App extends Component {
  calcFromRust() {
    console.log('add ', add(3, 7))
  }

  render() {
    return (
      <div>
        <h1>dvlp.haus</h1>
        <button onClick={this.calcFromRust}>calc rust</button>
        {/* <Header />
        <RustExample /> */}
      </div>
    )
  }
}
export default App
