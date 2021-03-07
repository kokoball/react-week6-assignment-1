import React from 'react';

import { render } from '@testing-library/react';

import InvalidPage from '../InvalidPage';

describe('InvalidPage', () => {
  it('잘못된 경로임을 알려주는 내용을 보여준다.', () => {
    const { queryByText } = render(<InvalidPage />);

    expect(queryByText(/404 Not Found/)).toBeInTheDocument();
  });
});