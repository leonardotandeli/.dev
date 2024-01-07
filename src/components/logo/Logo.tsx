'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Logo(): JSX.Element {
  const { theme } = useTheme();

  const whiteLogo = { testId: 'white-logo', url: '/logo.png' };
  const darkLogo = { testId: 'dark-logo', url: '/logo-dark.png' };

  const [logoUrl, setLogoUrl] = useState(whiteLogo);

  useEffect(() => {
    if (theme === 'dark') {
      setLogoUrl(whiteLogo);
    } else {
      setLogoUrl(darkLogo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <Image
      src={logoUrl.url}
      alt={'Logo'}
      width={225}
      height={12.5}
      data-testid={logoUrl.testId}
    />
  );
}
