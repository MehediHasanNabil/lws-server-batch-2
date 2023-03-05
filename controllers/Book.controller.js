const Book = require("../models/Book.model");

// get all books
async function getBooks(req, res, next) {
  try {
    const books = await Book().find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    next(errro);
  }
}

async function getBook(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(errro);
  }
}

async function addBook(req, res, next) {
  try {
    const { name, author, thumbnail, price, rating, featured } = req.body || {};

    // create new book
    const newBook = new Book({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });

    await newBook.save();

    res.status(201).json({
      success: {
        message: "Book add success",
      },
    });
  } catch (error) {
    console.log(error);
    next(errro);
  }
}

async function deleteBook(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(errro);
  }
}

async function editBook(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(errro);
  }
}

module.exports = {
  getBook,
  getBooks,
  addBook,
  editBook,
  deleteBook,
};
