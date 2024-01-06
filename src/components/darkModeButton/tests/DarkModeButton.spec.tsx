/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from 'next-themes';

import { DarkModeButton } from '../DarkModeButton';
import { Mock } from 'vitest';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => {
    return {
      setTheme: vi.fn(),
    };
  }),
  ThemeProvider: vi.fn(({ children }: any) => <div>{children}</div>),
}));

describe('DarkModeButton', () => {
  it(' should renders DarkModeButton correctly', () => {
    render(
      <ThemeProvider>
        <DarkModeButton />
      </ThemeProvider>,
    );

    const button = screen.getByTestId('dark-mode-button');
    expect(button).toBeDefined();
    fireEvent.click(button);
  });

  it('calls setTheme with correct theme on button click', () => {
    (useTheme as Mock).mockReturnValue({ setTheme: vi.fn() });

    render(
      <ThemeProvider>
        <DarkModeButton />
      </ThemeProvider>,
    );

    const button = screen.getByTestId('dark-mode-button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(useTheme().setTheme).toHaveBeenCalledWith('dark');
  });
});
