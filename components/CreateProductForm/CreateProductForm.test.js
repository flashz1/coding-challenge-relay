// @flow
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateProductForm from './CreateProductForm';

import { RelayEnvironmentProvider, QueryRenderer } from 'react-relay';
import initEnvironment from '../../lib/createRelayEnvironment'; // Adjust the path accordingly

jest.mock('../../__generated__/createQuery.graphql.js', () => '');

const relayEnvironment = initEnvironment();

const TestWrapper = ({ query, variables, children }) => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <QueryRenderer
        environment={relayEnvironment}
        query={query}
        variables={variables}
        render={({ error, props }) => {
          if (error) {
            console.error('Error loading data:', error);
            return <div>Error loading data</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return children;
        }}
      />
    </RelayEnvironmentProvider>
  );
};

test('renders the CreateProductForm component', async () => {
  await act(async () => {
    render(
      <TestWrapper query=''>
        <CreateProductForm />
      </TestWrapper>,
    );
  });
});

test('allows user to fill out the form and submit', async () => {
  await render(
    <TestWrapper query=''>
      <CreateProductForm />
    </TestWrapper>,
  );

  userEvent.type(screen.getByTestId('name'), 'Test Product');
  userEvent.type(screen.getByLabelText('Description'), 'This is a test product');
  userEvent.type(screen.getByLabelText('Price'), '25');
  userEvent.click(screen.getByLabelText('Category'));

  fireEvent.click(screen.getByText('Submit'));

  waitFor(() => {
    expect(screen.getByText('Product created successfully')).toBeInTheDocument();
  });
});
