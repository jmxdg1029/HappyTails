import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Happy Tails website', () => {
  render(<App />);
  // Check if the app renders without crashing
  expect(screen.getByRole('main') || screen.getByTestId('app')).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  // Check if navigation is present
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('renders contact form', () => {
  render(<App />);
  // Check if contact form is present
  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByText(/CONTACT US/i)).toBeInTheDocument();
});

test('renders form inputs', () => {
  render(<App />);
  // Check if form inputs are present
  expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
});
