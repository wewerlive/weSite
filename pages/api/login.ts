import { NextApiRequest, NextApiResponse } from 'next';

const creds = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    email: 'mail@mail.com',
    password: 'password',
  });
};

export default creds;