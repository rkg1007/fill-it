import * as googleApi from '../helpers/google-apis';
import * as config from '../utils/config';
import * as jwt from '../utils/jwt';
import * as userRepository from '../repositories/user';

const frontendRedirectUrl = config.get('FRONTEND_REDIRECT_URL');

export const loginWithGoogle = async () => {
  return googleApi.getAuthorizationUrl();
};

export const handleGoogleResponse = async ({ code }) => {
  try {
    const userInfo = await googleApi.getUserInfo(code);

    const userEmail = userInfo.email;
    const existingUser = await userRepository.getUserByEmail(userEmail);

    if (!existingUser) {
      const { name, picture } = userInfo;
      const userId = await userRepository.createUser({ name, email: userEmail, picture });
      const newUser = { name, email: userEmail, _id: userId };
      return generateRedirectUrlWithToken(newUser);
    } else {
      return generateRedirectUrlWithToken(existingUser);
    }
  } catch (error) {
    console.log('Something went wrong while logging.', error.message);
    return frontendRedirectUrl;
  }
};

const generateRedirectUrlWithToken = async (user) => {
  const token = await getJwtToken(user);
  return `${frontendRedirectUrl}?token=${token}`;
};

const getJwtToken = async (user) => {
  const { _id, name, email } = user;
  return jwt.createToken({ _id, name, email }); // Redirect URL generation moved here for clarity
};
