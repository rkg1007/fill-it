import db from '../database'

export default async function getAllUsers(){
    const users_db=await db.collection('users');
    const users=await users_db.find();
    return users;

}


export default async function getUser(userId){
const users_db=await db.collection('users');
const users=await users_db.find({USERId:userid});
return users;

}


export default async function UpdateUser(userid,fullname,email,password){
        const pass=HashPassword(password);
        const user=db.collection('users');
        const query={UserId:userid}
        const new_values={$set:{FullName:fullname,Email:email,Password:pass}}
        user.findAndModify(query,new_values)
}




