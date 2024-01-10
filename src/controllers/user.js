
import * as userService from '../service/userService'

export default getAllUsers=async (req,res)=>{

        const users=userService.getAllUsers();
        res.json(users);

}

export default getUser=async (req,res)=>{
    
    const user=userService.getUser(req.params);
    return user;

}


export default getMe=async (req,res)=>{
    const USER=req.user 
    const user=userService.getUser(USER);
    return user;

}

export default UpdateUser(req,res){
    const user=userService.UpdateUser(req);
    return user;
}


