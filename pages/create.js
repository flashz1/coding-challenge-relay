// @flow
import React, { Component } from 'react';
import { graphql, type Environment } from 'react-relay';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RootLayout from '../layouts/RootLayout';
import CreateProductForm from '../components/CreateProductForm';
import { isRelayModernEnvironment } from 'relay-runtime';

type TProps = {
  environment: Environment,
};

export default function Create({ environment }: TProps) {
  return (
    <RootLayout>
      <Box>
        <Box display='flex' alignItems='center' justifyContent='center' m={4}>
          <Typography variant='h1'>Create Product</Typography>
        </Box>
        <Box display='flex' flexWrap='wrap' justifyContent='center'>
          <CreateProductForm environment={environment} />
        </Box>
      </Box>
    </RootLayout>
  );
}

export const createProductMutation = graphql`
  mutation create_createProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      category
      createdAt
    }
  }
`;

const createProductQuery = graphql`
  query createQuery {
    viewer {
      products {
        id
        name
        description
        price
        category
        createdAt
      }
    }
  }
`;

Create.query = createProductQuery;
