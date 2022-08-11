import { hashSync, genSaltSync } from 'bcryptjs';

const cryptCreate = (valueToBeEncrypted: any, sequenceHash?: number) => {
  const salt = !sequenceHash ? 10 : sequenceHash
  const valueEncrypted = hashSync(String(valueToBeEncrypted), genSaltSync(salt));
  return valueEncrypted
};

export { cryptCreate };
