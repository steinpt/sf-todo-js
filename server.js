/*
  sf-todo-js - server.js
  Stein Tronstad
    
*/

/*
  DATA MODEL
*/
const todoRecords = [
  "Buy groceries",
  "Fix broken vase",
  "Book holiday",
  "Visit parents",
  "Showel snow",
  "Call grandmother",
  "Read a book",
  "Watch Game of Thrones",
  "Play game with kids",
  "Take a hike",
];
const noOfItems = 4;

/*
  HTTP SERVER
*/
const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: true }));

// Get and Serve ToDos
app.get("/", (req, res) => {
  let todoRecordsRnd = [];
  for (let i = 0; i < noOfItems; i++) {
    let rndNo = Math.floor(Math.random() * 10);
    todoRecordsRnd.push(todoRecords[rndNo]);
  }
  res.render("todos", { todos: todoRecordsRnd });
});

// Serve your app
console.log("Served: http://localhost:" + port);
app.listen(port);
