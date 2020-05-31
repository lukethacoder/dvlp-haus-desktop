import React from 'react'
import * as renderer from 'react-test-renderer'

import { Application } from '../application'

describe('component-application', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Application />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
