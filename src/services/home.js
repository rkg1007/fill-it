import { pingDatabase } from '../database/mongodb';

export const checkServerHealth = () => {
  return { status: 'working' };
};

export const checkDatabaseHealth = async () => {
  const databaseWorking = await pingDatabase();
  return { status: databaseWorking ? 'working' : 'error' };
};
