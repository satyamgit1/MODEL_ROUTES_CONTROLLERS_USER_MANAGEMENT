const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 2000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/user_management").then(() =>
  console.log("MongoDB connected!")
);

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Server started on port 2000);");
});
