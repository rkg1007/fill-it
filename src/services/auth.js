import * as googleApi from '../helpers/google-apis';
import * as config from '../utils/config';

const frontendRedirectUrl = config.get('FRONTEND_REDIRECT_URL');

export const loginWithGoogle = async () => {
  return googleApi.getAuthorizationUrl();
};

export const handleGoogleResponse = async ({ code }) => {
  try {
    const userInfo = await googleApi.getUserInfo(code);
    console.log(userInfo);
    return `${frontendRedirectUrl}?token=verified`;
  } catch {
    return frontendRedirectUrl;
  }
};
