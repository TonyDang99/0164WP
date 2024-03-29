const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));

app.use(express.json());
app.use(cookieParser());
//date 22/8/2023
app.get("/test", (req, res) => {
    res.json("Hello world!");
  });
app.use(bodyParser.urlencoded({extended:true,limit:"300mb"}));
app.use(express.urlencoded({ limit: "300mb", extended: true }));
app.use(fileUpload({useTempFiles: true}));

// config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        // path:"backend/config/.env"
        path:"config/.env",
    })};

// Route imports
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");
const payment = require("./routes/PaymentRoute");
const cart = require("./routes/WishListRoute");

app.use("/api/v2",product);

app.use("/api/v2",user);

app.use("/api/v2",order);

app.use("/api/v2",payment);

app.use("/api/v2",cart);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
})

// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app