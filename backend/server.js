import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectToMongoDb from './db/connectToMongoDB.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;



app.use(express.json()); //to parse the incoming requests with JSON payloads from (req.body)
app.use(cookieParser());  

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)


app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`server is running on port ${PORT}`)
});