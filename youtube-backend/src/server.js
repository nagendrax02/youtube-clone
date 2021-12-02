require("dotenv").config();
const express = require("express");
const dbConnection = require("./configs/db");
// const categoryRoutes = require('./routes/category.old.route');
const commentRoutes = require("./routes/comments.old.routes");
const errorHandler = require("./middleware/error.old.middleware");
const AuthRoutes = require("./routes/auth.route");
const VideoRoutes = require("./routes/video.routes");
const subscibersRoute = require("./routes/subscribe.routes");
// const videoController = require("./controllers/video.controller");

const app = express();
app.use(express.json());
app.use(errorHandler);




// const feelingController = require("./routes/feelings.old.route");

// app.use("/feeling", feelingController);

// app.use('/categories', categoryRoutes);
// app.use("/api/video",);
app.use("/comment", commentRoutes);
// app.use("/register", register); //won't work
// app.use("/login", login);  //won't work
app.use("/subscribe", subscibersRoute);

// app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/users", userRoutes);

//=============================================Server Endpoints================================
app.use(AuthRoutes);
app.use(VideoRoutes);



const PORT = process.env.PORT || 2000;
console.log("PORT:", PORT);
app.use(async function(req, res) {
    res.send("404");
});

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


