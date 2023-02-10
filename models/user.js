
import ErrorHandler from '../utils/errorHandeler.js';

const user = {
    user:(data,next,callback)=>{
        const userExist = false;
        if(userExist){
            return next(new ErrorHandler("users Already Exist",400))
        }
        // res.json({
        //     message:'ok'
        // })
        let result = {message:'ok'}
        return callback(result); 
    }
}

export default user;
