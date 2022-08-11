import { compareSync } from 'bcryptjs'

const cryptCompare = (valueNotEncrypted: any, valueEncrypted: any) => {
  const isMatchValues = compareSync(valueNotEncrypted, valueEncrypted);
  return isMatchValues
};

export { cryptCompare };
