require("dotenv").config();
const mongoose = require("mongoose");


//---* Database Connection *---//

// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events opens/disconnect/errors
mongoose.connection
    .on("open", () => console.log("Mongo in the house"))
    .on("close", () => console.log("Mongo has left the building"))
    .on("error", (error) => console.log(error));


module.exports = mongoose;