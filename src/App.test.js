import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn chapter1 python 1', () => {
  render(<App />);
  const linkElement = screen.getByTestId("python1");
  fireEvent.click(linkElement);
  const result = screen.getByTestId("pythonResult1");
  expect(result).toBeInTheDocument();
});

test('renders learn chapter1 python 2', () => {
  render(<App />);
  const linkElement = screen.getByTestId("python2");
  fireEvent.click(linkElement);
  const result = screen.getByTestId("pythonResult2");
  expect(result).toBeInTheDocument();
});

test('renders learn chapter1 python 3', () => {
  render(<App />);
  const linkElement = screen.getByTestId("python3");
  fireEvent.click(linkElement);
  const result = screen.getByTestId("pythonResult3");
  expect(result).toBeInTheDocument();
});

test('renders learn chapter1 python 4', () => {
  render(<App />);
  const linkElement = screen.getByTestId("python4");
  fireEvent.click(linkElement);
  const result = screen.getByTestId("pythonResult4");
  expect(result).toBeInTheDocument();
});
