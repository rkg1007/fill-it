import * as authService from '../services/auth';

export const loginWithGoogle = async (_req, res) => {
  const url = await authService.loginWithGoogle();
  res.redirect(url, 301);
};

export const handleGoogleResponse = async (req, res) => {
  const { query } = req;
  const url = await authService.handleGoogleResponse(query);
  res.redirect(url, 301);
};
