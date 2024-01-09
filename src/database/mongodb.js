import { MongoClient } from 'mongodb';
import * as config from '../utils/config';

// Load connection details from configuration
const uri = config.get('DATABASE').mongodbUri || 'mongodb://localhost:27017';

// Create the MongoClient instance
const client = new MongoClient(uri);

// Store connected database instances
const connectedDatabases = {};

async function connectToDatabase(databaseName = 'fill-it') {
  try {
    if (!connectedDatabases[databaseName]) {
      // Connect if not already connected
      await client.connect();
      console.log(`Connected to MongoDB database ${databaseName}!`);
      connectedDatabases[databaseName] = client.db(databaseName);
    }
  } catch (error) {
    console.error(`Error connecting to ${databaseName} database:`, error);
    throw error; // Re-throw to allow proper handling
  }
}

export async function getCollection(collectionName, databaseName = 'fill-it') {
  await connectToDatabase(databaseName); // Ensure connection first
  return connectedDatabases[databaseName].collection(collectionName);
}

export async function pingDatabase(databaseName = 'fill-it') {
  try {
    await connectToDatabase(databaseName); // Ensure connection first
    await connectedDatabases[databaseName].command({ ping: 1 });
    return true;
  } catch (error) {
    return false;
  }
}
