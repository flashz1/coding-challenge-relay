// @flow
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMutation, type Environment } from 'react-relay';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
  Snackbar,
} from '@material-ui/core';

import { validationSchema } from './consts';
import { createProductMutation } from '../../pages/create';

type TProps = {
  environment?: Environment,
};

export default function CreateProductForm({ environment }: TProps) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [createProduct] = useMutation(createProductMutation);

  const handleCancel = () => router.push({ pathname: '/' });

  const onSubmit = async (values) => {
    const variables = {
      input: values,
    };

    const product = await createProduct({
      variables: {
        input: {
          name: values.name,
          description: values.description,
          price: +values.price,
          category: values.category,
        },
      },
      onCompleted: (response, errors) => {
        if (response) {
          setSuccess(true);
          formik.resetForm();
        }

        if (errors) {
          console.error('Mutation errors:', errors);
        }
      },
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      category: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Snackbar
        open={success}
        autoHideDuration={2000}
        message={`Product created successfully`}
        onClose={() => setSuccess(false)}
      />

      <TextField
        fullWidth
        id='name'
        name='name'
        label='Product Name'
        data-testid="name"
        variant='outlined'
        margin='normal'
        onChange={formik.handleChange}
        value={formik.values.name}
        error={!!formik.errors.name}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id='description'
        name='description'
        label='Description'
        multiline
        minRows={4}
        variant='outlined'
        margin='normal'
        onChange={formik.handleChange}
        value={formik.values.description}
        error={!!formik.errors.description}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        fullWidth
        id='price'
        name='price'
        label='Price'
        type='number'
        variant='outlined'
        margin='normal'
        onChange={formik.handleChange}
        value={formik.values.price}
        error={!!formik.errors.price}
        helperText={formik.touched.price && formik.errors.price}
      />
      <FormControl variant='outlined' fullWidth margin='normal'>
        <InputLabel id='category-label'>Category</InputLabel>
        <Select
          labelId='category-label'
          id='category'
          name='category'
          label='Category'
          onChange={formik.handleChange}
          value={formik.values.category}
          error={!!formik.errors.category}
        >
          <MenuItem value='Cars'>Cars</MenuItem>
          <MenuItem value='Boats'>Boats</MenuItem>
          <MenuItem value='Jets'>Jets</MenuItem>
        </Select>
        <FormHelperText error>{formik.touched.category && formik.errors.category}</FormHelperText>
      </FormControl>
      <Box display='flex' flexWrap='wrap' gridGap={12} justifyContent='center'>
        <Button
          onClick={handleCancel}
          type='button'
          variant='contained'
          color='secondary'
          size='large'
        >
          Cancel
        </Button>
        <Button type='submit' variant='contained' color='primary' size='large'>
          Submit
        </Button>
      </Box>
    </form>
  );
}
