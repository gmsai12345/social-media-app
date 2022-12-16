import express, { application } from "express";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts";
// connect database create mongodb cluster set
// 
const App = express();
// now we can use all diffrent methods on app 
application.use('/posts', postRoutes);
application.use(bodyParser.json({limit:"30mb",extended:true}))
// sending some image large in size
application.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
// same
application.use(cors());
// server application to real databaase host database on their cloud
 
const CONNECTION_URL = "mongodb+srv://gmsai12345:Sai@12345@cluster0.i0ptdww.mongodb.net/?retryWrites=true&w=majority"
// connection url to connect to database
const PORT = process.env.PORT || 5000;
// for now 5000 
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> App.listen(PORT, console.log(`server running on port:${PORT}`)))
// if database is connection : call our app 

.catch((error) => console.log(error.message));

mongoose.set('useFindAndMdsify', false);
// accept connection url and object which has 2 options
