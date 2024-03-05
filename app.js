const express =  require("express");
const app = express();
const bodyParser = require("body-parser")

const mongoose = require("mongoose");


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

require("dotenv").config()



let mongooseConnect = mongoose
.connect(process.env.DB_STRING)
.then((done) => {
  console.log("Db connected");
})
.catch((err) => console.log(err));


app.use(express.urlencoded({extended:true}));





// app.use(session({
//     secret:process.env.SECRET,
//     resave: true,
//     saveUninitialized: true,
//     store: MongoStore.create({mongoUrl:"mongodb://0.0.0.0/web40"})
// }))


app.use(require("./routes/main"))



app.listen(3000, ()=>console.log("Server running on port 3000"))