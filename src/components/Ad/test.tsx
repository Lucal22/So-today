import { render, screen } from '@testing-library/react';
import Ad from './Ad';

describe('<Ad />', () => {
  it('Should render a div', () => {
    render(<Ad />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
