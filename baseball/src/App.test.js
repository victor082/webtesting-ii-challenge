import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
  it('should display strikes and foul balls', () => {
    const { getByText } = render(<App />)

    getByText(/strikes/i)
    getByText(/balls/i)
  })

  it('should add strikes and balls', () => {
    const { getAllByText } = render(<App />)

    const button = getAllByText(/strikes/i)
    fireEvent.click(button)

    const button2 = getAllByText(/ball/i)
    fireEvent.click(button2)
  }) 

})