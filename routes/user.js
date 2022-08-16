import express from 'express';
import { catchAsyncError } from '../middleware/catchAsyncError.js';
import user from '../models/user.js'
const router = express.Router();


router.get('/',
catchAsyncError(async(req,res,next)=>{
    await user['user'](req,next,function(result){
        res.json({
            message:result
        }) 
    })    
})

)

export default router;