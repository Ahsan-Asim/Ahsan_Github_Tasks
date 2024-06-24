const express = require("express");
const bodyParser = require("body-parser");
const userRouter=require("./Routes/user.js")
const {connectMongoDb}=require('./connection');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


connectMongoDb('mongodb://localhost:27017/DB1');


app.use("/",userRouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
