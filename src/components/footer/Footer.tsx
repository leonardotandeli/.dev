import React from 'react';

import { Terminal } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

export default function Footer(): JSX.Element {
  return (
    <footer className="pt-12" data-testid="footer">
      <Alert data-testid="alert">
        <Terminal className="h-4 w-4" data-testid="terminal" />
        <AlertDescription data-testid="alert-description">
          this page has been developed with nextjs, shadcn, tailwindcss,
          typescript and love.
        </AlertDescription>
      </Alert>
    </footer>
  );
}
