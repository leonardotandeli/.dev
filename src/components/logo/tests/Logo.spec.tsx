import { render, screen } from '@testing-library/react';

import Logo from '../Logo';
import { useTheme } from 'next-themes';
import { Mock } from 'vitest';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({
    setTheme: vi.fn(),
    theme: 'dark',
  })),
  ThemeProvider: vi.fn(({ children }) => <div>{children}</div>),
}));

describe('Logo Component', () => {
  it('should renders with the white-logo logo initially', () => {
    render(<Logo />);
    const logo = screen.getByTestId('white-logo');
    expect(logo).toBeDefined();
  });

  it('should renders with the dark-logo logo initially', () => {
    (useTheme as Mock).mockReturnValue({ setTheme: vi.fn(), theme: 'light' });

    render(<Logo />);
    const logo = screen.getByTestId('dark-logo');
    expect(logo).toBeDefined();
  });
});
