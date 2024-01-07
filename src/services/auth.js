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

    const userEmail = userInfo.email; // Extract email directly
    const existingUser = await userRepository.getUserByEmail(userEmail);

    if (!existingUser) {
      const { name, picture } = userInfo;
      const userId = await userRepository.createUser({ name, email: userEmail, picture });
      const newUser = { name, email: userEmail, _id: userId };
      return generateRedirectUrlWithToken(newUser); // Reuse function for clarity
    } else {
      return generateRedirectUrlWithToken(existingUser); // Reuse function for clarity
    }
  } catch (error) {
    console.error('Error handling Google response:', error); // Log error for debugging
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
