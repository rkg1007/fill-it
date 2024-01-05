import * as authService from '../services/auth';

export const loginWithGoogle = async (_req, res) => {
  const redirectUrl = await authService.loginWithGoogle();
  res.redirect(redirectUrl, 301);
};

export const handleGoogleResponse = async (req, res) => {
  const { query } = req;
  const redirectUrl = await authService.handleGoogleResponse(query);
  res.redirect(redirectUrl, 301);
};
