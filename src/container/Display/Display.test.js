import {render, screen} from '@testing-library/react'
import Display from './index'

describe('Display countdown timer', () => {
  test('renders display', () => {
    render(<Display />)
    const display = screen.getByTestId('display')
    expect(display).toHaveTextContent(/^Tempo restante para o evento/i)
  })
  test('renders event name', () => {
    render(<Display event={{name: 'Nome do evento'}} />)
    const name = screen.getByTestId('display__name')
    expect(name).toHaveTextContent("Nome do evento")
  })
  test('renders event datetime', () => {
    render(<Display event={{datetime: '01/01/2025 10:23:45'}} />)
    const datetime = screen.getByTestId('display__datetime')
    expect(datetime).toHaveTextContent("01/01/2025 10:23:45")
  })
})