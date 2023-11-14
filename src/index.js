const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routs/users");
const bookRouter = require("./routs/books");
const loggerOne = require("./middlewares/loggerOne");

// Вызываем файл конфигурации ДО обращения к переменным среды
dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = express();

//  middlewares
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

//  router
app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
