import { sign } from 'jsonwebtoken';
import { appVariables, Settings } from '_app';

type GenerateToken = {
  email: string;
  username?: string;
  id: string;
  avatar?: string;
};

function generateToken({ email, username, id, avatar }: GenerateToken) {
  const token = sign(
    {
      username: username || '',
      email: email,
      id: id,
      avatar,
    },
    String(Settings.ApiCredentials?.AuthSecretCode),
    {
      subject: id,
      expiresIn: appVariables.cookies.expire,
    }
  );

  return token
};

export { generateToken };
