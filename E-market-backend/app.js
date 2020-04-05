const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path:'./env'})
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes')

const morgan =require('morgan');
app.use(morgan("dev"));
const cookieParser = require('cookie-parser')
const URL = "mongodb://127.0.0.1:27017/Emarket"


// if ((process.env.NODE_ENV = "development")) {
//     app.use(morgan("dev"));
//   }
// //console.log(process.env)
app.use('/v1/api/users',userRoutes)
app.use('/v1/api/products',productRoutes);
//routes


const port = process.env.PORT || 8030;


mongoose.connect(URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(()=> console.log("DB successfully Connected "))

app.listen(port,() =>{

    console.log(`App is listening on port ${port}`)
})