import authorisation_admin from '../auth/authorisation_admin'
import authentication from '../auth/authentication'
import {getAllUserController, getUserController,getMeController,UpdateUserController,DeleteUserController} from '../controllers/userControllers'


export default
[
    {
    method:'get',
    path:'/',
    middlewares:[authenticate,authorisation_admin],
    functions:[getAllUsersController]
}

   {
    method:'get',
    path:'/:userId',
    middlewares:[authenticate,authorisation_admin],
    functions:[getUserController]
}

 {
   method:'get',
    path:'/me',
    middlewares:[authenticate,authorisation],
    functions:[getMeController]

}

{
    method:'patch',
    path:'/:userId',
    middlewares:[authenticate,authorisation_admin,authorisation],
    functions:[UpdateUserController]
}
{
    method:'delete',
    path:'/:userId',
    middlewares:[authenticate,authorisation_admin,authorisation],
    functions:[DeleteUserController]
}
]
