// @flow
import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be positive'),
  category: yup.string().required('Category is required'),
});
