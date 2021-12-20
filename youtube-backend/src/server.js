const bodyParser = require('body-parser')
const { config } = require("dotenv");
const express = require("express");
const dbConnection = require("./configs/dbConnection")
const AuthRoutes = require("./routes/auth.route")
const VideoRoutes = require("./routes/video.routes");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 2000;

//=============================================Server Endpoints================================
 app.use(AuthRoutes);
 app.use(VideoRoutes)
//===================================================================================

app.listen(PORT, async()=>{
    await dbConnection();
    console.log(`listening to port ${PORT}`)
})