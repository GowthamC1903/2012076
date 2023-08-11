const express = require("express");

const app = express();

app.use("/train",require("./routes/trainRoutes"))

app.listen(5000,()=>{
    console.log("Server started")
})