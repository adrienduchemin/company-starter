import React from 'react'
import { render } from '@testing-library/react'

import TodosComponents from './todos-components'

describe(' TodosComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodosComponents />)
    expect(baseElement).toBeTruthy()
  })
})
