const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routs/users");
const loggerOne = require("./middlewares/loggerOne");

// Вызываем файл конфигурации ДО обращения к переменным среды
dotenv.config();

const { PORT = 3000, API_URL = 'http://127.0.0.1' } = process.env;

const app = express();
const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};

//  middlewares
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from post");
});

//  router
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
