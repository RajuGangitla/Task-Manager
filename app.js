const express = require("express");
const dbConnect = require("./db/db");
const app= express();
const dotenv= require("dotenv").config();
const PORT = process.env.PORT || 5000;
const tasks = require('./routes/tasks')
const notFound =require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')



//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use("/api/v1/tasks", tasks) 
app.use(notFound)  
app.use(errorHandlerMiddleware)  



dbConnect()
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})