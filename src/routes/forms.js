import authenticate from '../auth/authenticate'
import authorisation from '../auth/authorisation'

export default [
    {
        method:'get',
        path:'/',
        middlewares:[authenticate,authorisation]
    }
    {
        method:'post',
        path:'/',
        middlewares:[authenticate,authorisation]
    }
    {
        method:'get',
        path:'/:formId',
        middlewares:[authenticate]
    }
    {
        method:'get',
        path:'/:formId/answers',
        middlewares:[authenticate,authorisation]
    }
    {
        method:'get',
        path:'/:formId/answers/:answerId',
        middlewares:[authenticate,authorisation]
    }
    {
        method:'get',
        path:'/:formId/fill',
        middlewares:[authenticate]
    }
]
