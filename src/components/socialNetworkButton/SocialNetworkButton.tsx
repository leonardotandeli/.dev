import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ISocialNetworkButtonProps {
  url: string;
  children: React.ReactNode;
  dataTestId?: string;
}

export default function SocialNetworkButton({
  url,
  children,
  dataTestId,
}: ISocialNetworkButtonProps): JSX.Element {
  return (
    <Link target="_blank" href={url}>
      <Button variant="outline" size="icon" data-testid={dataTestId}>
        {children}
      </Button>
    </Link>
  );
}
