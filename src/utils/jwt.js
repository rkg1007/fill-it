import jwt from 'jsonwebtoken';
import * as config from './config';

const jwtConfigs = config.get('JWT_CONFIG');
const { secretKey } = jwtConfigs;

export const createToken = async (payload) => {
  return jwt.sign(payload, secretKey);
};
