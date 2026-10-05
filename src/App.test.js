import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo app heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /add todo/i });
  expect(heading).toBeInTheDocument();
});
