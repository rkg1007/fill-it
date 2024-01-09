import { getCollection } from '../database/mongodb';

export const getUserByEmail = async (email) => {
  const userCollection = await getCollection('users');
  return userCollection.findOne({ email });
};

export const createUser = async (user) => {
  const userCollection = await getCollection('users');
  const result = await userCollection.insertOne(user);
  return result.insertedId;
};
