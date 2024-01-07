'use client';

import { MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

import { useState } from 'react';

export function DarkModeButton(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const themeBoolean = theme === 'dark' ? true : false;
  const [isDarkMode, setIsDarkMode] = useState(themeBoolean);

  const handleDarkMode = (): void => {
    setIsDarkMode(prev => !prev);
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleDarkMode}
      data-testid="dark-mode-button"
    >
      <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-blue-500" />
    </Button>
  );
}
