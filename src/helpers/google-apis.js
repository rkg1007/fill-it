import { google } from 'googleapis';
import * as config from '../utils/config';

// Load OAuth2 client credentials from configuration
const { clientId, clientSecret, callbackUrl } = config.get('GOOGLE_AUTH_CONFIG');

// Create the OAuth2 client instance
const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, callbackUrl);

export const getAuthorizationUrl = () => {
  // Generate the authorization URL for Google login
  return oauth2Client.generateAuthUrl({
    access_type: 'offline', // Request offline access for refresh tokens
    scope: 'profile email', // Specify scopes for user data
    prompt: 'select_account',
  });
};

export const getUserInfo = async (code) => {
  // Exchange authorization code for access token
  const { tokens } = await oauth2Client.getToken(code);

  // Set access token credentials
  oauth2Client.setCredentials(tokens);

  // Create OAuth2 service instance for user profile access
  const oauth2 = google.oauth2({
    version: 'v2',
    auth: oauth2Client,
  });

  // Fetch user profile information
  const userinfo = await oauth2.userinfo.get();
  return userinfo.data; // Return parsed user profile data
};
