const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams' },
  { id: 2, title: 'Snow Crash', author: 'Neal Stephenson' },
  { id: 3, title: 'Ready Player One', author: 'Ernest Cline' }
];

app.get('/books', (req, res) => {
  res.send(books);
});

app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send('The book with the given ID was not found.');
  res.send(book);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});