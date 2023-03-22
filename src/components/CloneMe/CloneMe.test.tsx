/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { CloneMe } from '.';

describe('<CloneMe />', () => {
  it('should render CloneMe', () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
