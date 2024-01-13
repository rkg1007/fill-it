import * as db from '../database/mongodb';

export async function getAllUsers() {
  const users_db = await db.getCollection('users');
  const user = await users_db.insertOne({ name: 'Anusha', password: 'arjun', UserId: 'anu' });
  const users = await users_db.find(user);
  console.log(users);
  return users;
}

export async function getUser(userId) {
  const users_db = await db.getCollection('users');
  const users = await users_db.find({ UserId: userId });
  console.log('GOT YOU');
  return users;
}

export async function UpdateUser(userid, fullname, email, password) {
  const pass = password;
  var collection = await db.getCollection('users');
  const query = { UserId: userid };
  console.log(collection, pass);

  const new_values = { $set: { FullName: fullname, Email: email, Password: pass } };
  const u = await collection.updateOne(query, new_values);
  console.log(u);
  return u;
}



