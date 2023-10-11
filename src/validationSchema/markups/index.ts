import * as yup from 'yup';

export const markupValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable().required(),
  scripture_id: yup.string().nullable().required(),
});
