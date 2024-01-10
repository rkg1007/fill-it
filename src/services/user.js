import * as userRepo from '../repository/user.js'



export default getAllUsers=async()=>{
    return await userRepo.getAllUsers();

}


export default getUser=async(user)=>{
const userId=user.userid
return await userRepo.getUser(userId);
}


export default UpdateUser(req){
    const {userid,fullName,email,password}=req.body,
    const user= await  userRepo.UpdataUser(userid,fullname,email,password);
    res.json(user);

}
