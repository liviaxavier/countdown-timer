import { render, screen } from '@testing-library/react';
import App from './App';

describe('Data input section', () => {
  test('renders section title', () => {
    render(<App />);
    const title = screen.getByTestId('section__title');
    expect(title).toBeInTheDocument();
  });
})
