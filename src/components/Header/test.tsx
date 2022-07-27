import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Ad />', () => {
  it('Should render a div', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
