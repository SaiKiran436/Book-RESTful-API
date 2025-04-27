const Book = require('../models/bookModel');

// GET /books
exports.getBooks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const books = await Book.find().skip(skip).limit(limit);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/:id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

// POST /books
exports.createBook = async (req, res) => {
  const { title, author, publishedDate, genre } = req.body;
  if (!title || !author || !publishedDate || !genre) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const newBook = await Book.create({ title, author, publishedDate, genre });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /books/:id
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /books/:id
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};
