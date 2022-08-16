import  Express  from "express";
import errorMiddleware from "./middleware/Error.js";
import userRouter from './routes/user.js';

const app = Express();

app.use('/user',userRouter)  

app.listen(4000,()=>{
    console.log('server is listing on 4000')
})

app.use(errorMiddleware);