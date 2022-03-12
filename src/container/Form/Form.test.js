import { render, screen } from '@testing-library/react';
import Form from './index';

describe('Data input section', () => {
  test('renders name field', () => {
    render(<Form />)
    
    const eventNameLabel = screen.getByTestId('event-name__label')
    expect(eventNameLabel).toBeInTheDocument();
    
    const eventNameInput = screen.getByTestId('event-name__input')
    expect(eventNameInput).toHaveAttribute('type','text')
    expect(eventNameInput).toBeRequired()
    expect(eventNameInput).toBeInTheDocument()
  })

  test('renders date field', () => {
    render(<Form />)

    const eventNameLabel = screen.getByTestId('event-date__label')
    expect(eventNameLabel).toBeInTheDocument();
    
    const eventNameInput = screen.getByTestId('event-date__input')
    expect(eventNameInput).toHaveAttribute('type','date')
    expect(eventNameInput).toBeRequired()
    expect(eventNameInput).toBeInTheDocument()
  })
  test('renders time field', () => {
    render(<Form />)

    const eventNameLabel = screen.getByTestId('event-time__label')
    expect(eventNameLabel).toBeInTheDocument();
    
    const eventNameInput = screen.getByTestId('event-time__input')
    expect(eventNameInput).toHaveAttribute('type','time')
    expect(eventNameInput).toBeInTheDocument()
  })

})
