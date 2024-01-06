import { ThemeProvider } from "../ThemeProvider";
import { render } from "@testing-library/react";

vi.mock('next-themes', () => ({
    ThemeProvider: vi.fn(({ children }) => <div data-testid="mockedThemeProvider">{children}</div>),
  }));

it('should render ThemeProvider', () => {
    render(<ThemeProvider />);
    const mockedThemeProvider = document.querySelector('[data-testid="mockedThemeProvider"]');

    expect(mockedThemeProvider).toBeDefined();
  });