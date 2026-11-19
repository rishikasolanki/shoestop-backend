const express = require('express')
const app = express()
const cors = require("cors")
const dotenv = require('dotenv')
const connectDB = require('./db/connectDB')
const seedProductsIfEmpty = require('./db/seedProducts')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
dotenv.config()

const port = process.env.PORT || process.env.port || 5000
const mongoUri = process.env.MONGO_URI || process.env.mongoURI

app.use(express.json());
app.use(cors())

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.use('/' , userRoutes)
app.use('/api' , productRoutes)

const startServer = async ()=>{
    try{
       
        if (!mongoUri) throw new Error('Missing MongoDB connection string (MONGO_URI)')
        await connectDB(mongoUri)
        console.log('connected to db');
        await seedProductsIfEmpty()
        app.listen(port , ()=>{
            console.log(`server started at ${port}`);
        })
    }
    catch(error){
        console.log(error);
    }
}


startServer()
