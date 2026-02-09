// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Monorepo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Monorepo/i);
    expect(titleElement).toBeInTheDocument();
});
