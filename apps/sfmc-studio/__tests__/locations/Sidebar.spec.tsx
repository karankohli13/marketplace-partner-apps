import React from 'react';
import { render } from '@testing-library/react';
import { mockCma, mockSdk } from '../mocks';
import Sidebar from '@/components/Locations/Sidebar';

// Mocking useSDK and useCMA hooks from @contentful/react-apps-toolkit
jest.mock('@contentful/react-apps-toolkit', () => ({
  useSDK: () => mockSdk,
  useCMA: () => mockCma,
}));

describe('Sidebar component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Sidebar />);

    expect(getByText('Hello Sidebar Component (AppId: test-app)')).toBeInTheDocument();
  });
});
