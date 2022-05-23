const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const books = [
  { id: 1, name: "Kitob1" },
  { id: 2, name: "Kitob2" },
  { id: 3, name: "Kitob3" },
  { id: 4, name: "Kitob4" },
  { id: 5, name: "Kitob5" },
];

app.get("/", (req, res) => {
  res.send("Helou");
});

app.post("/books", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    res.status(400).send(validation.error);
  }

  const book = {
    id: books.length + 1,
    name: req.body.name,
  };

  books.push(book);
  res.send(books);
});

// app.get("/books/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(books[id]);
// });

// app.route("/books/:id").get((req, res) => {
//   const id = req.params.id;
//   const ans = books.find((val) => id == val.id);
//   if (!ans) res.status(404).send("Topilmadi");
//   res.send(ans);
// });

// app.route("/books/:month/:year").get((req, res) => {
//   console.log(req.params);
//   res.send(books);
// });

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Ishladi");
});
