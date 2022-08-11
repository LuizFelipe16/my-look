import { cryptCreate } from './cryptCreate';
import { cryptCompare } from './cryptCompare';

const cryptography = {
  encryptValue: cryptCreate,
  compareValues: cryptCompare,
};

export { cryptography };
