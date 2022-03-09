//---* Import Our Dependencies *---//

require("dotenv").config(); //Loads Enviorment Variables into process.env
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const fruitController = require("./controller/fruits");
const path = require("path");//built in node_module to resolve paths correctly



//---* Create Express Application *---//

const app = express()
app.engine("jsx", require("express-react-views").createEngine())
app.set("view engine", "jsx")


//---* Middleware *---//

app.use(morgan("tiny")); //logging
app.use(express.urlencoded({extended: true})); // parse urlencoded request from bodies
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.static("public")); // serve files from public statically


//---* Routes *---//
app.use("/fruits", fruitController)
app.get("/", (req, res) => {
    res.send("Your server is running")
})

//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Now Listening on port ${PORT} ***`));

