import * as validateYup from 'yup';
import { ObjectShape } from 'yup/lib/object';

const myYup = validateYup

const createFormValidation = (create: (yupValidate: typeof myYup) => ObjectShape) => {
  const dataValidation = validateYup.object().shape(create(validateYup));

  return dataValidation;
};

const validation = {
  createForm: createFormValidation,
};

export { validation };
