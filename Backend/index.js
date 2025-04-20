import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
//routes
app.use('/auth/',router)
app.get('/',(req,res)=>{
    res.send('Welcome to TodoMaster APIs...')
})

if(!process.env.URI){
    console.error("MongoDB uri is not defiend in .env file!!")
    process.exit(1)
}

mongoose.connect(process.env.URI).then(()=>{
    console.log("Database connected Successfully!");
    
}).catch((err)=>{
    console.error("MongoDB error",err)
    process.exit(1)
})

app.listen(port,()=>{
    console.log('Server is running on port',port);
    
})