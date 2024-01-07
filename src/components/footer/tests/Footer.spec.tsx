import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('it should render the footer correctly', () => {
    render(<Footer />);

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeDefined();

    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeDefined();

    const terminalElement = screen.getByTestId('terminal');
    expect(terminalElement).toBeDefined();

    const alertDescriptionElement = screen.getByTestId('alert-description');
    expect(alertDescriptionElement).toBeDefined();

    expect(alertDescriptionElement.textContent).toContain(
      'developed with nextjs',
    );
  });
});
