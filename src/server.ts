import express from "express";

const app = express();

const port = 3333;

app.use(express.json());

app.listen(port);

console.log(
  `\n\n\n| WELCOME TO E-COMMERCE, SERVER IS RUNNING ON PORT ${port} |\n\n\n`
);
