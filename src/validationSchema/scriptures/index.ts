import * as yup from 'yup';

export const scriptureValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  translation: yup.string().nullable(),
  transliteration: yup.string().nullable(),
});
