import { render } from '@testing-library/react';

import BellComponentLibrary from './bell-component-library';

describe('BellComponentLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BellComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
