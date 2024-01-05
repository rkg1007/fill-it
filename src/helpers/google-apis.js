import { google } from 'googleapis';
import * as config from '../utils/config';

const clientId = config.get('GOOGLE_CLIENT_ID');
const clientSecret = config.get('GOOGLE_CLIENT_SECRET');
const callbackUrl = config.get('GOOGLE_CALLBACK_URL');

// OAuth2 client configuration
const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, callbackUrl);

export const getAuthorizationUrl = () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline', // Request offline access for refresh tokens
    scope: 'profile email', // Specify scopes for user data
    prompt: 'select_account',
  });
};

export const getUserInfo = async (code) => {
  return new Promise((resolve, reject) => {
    oauth2Client.getToken(code, (err, token) => {
      if (err) {
        reject(err);
        return;
      }
      // Access token retrieved successfully
      oauth2Client.setCredentials(token);

      // Use the access token to fetch user profile information
      const oauth2 = google.oauth2({
        version: 'v2',
        auth: oauth2Client,
      });
      oauth2.userinfo.get((err, userinfo) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(userinfo.data);
      });
    });
  });
};
