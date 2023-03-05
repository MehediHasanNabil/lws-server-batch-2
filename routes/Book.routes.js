const express = require("express");
const router = express.Router();
const {
  getBooks,
  addBook,
  getBook,
  editBook,
  deleteBook,
} = require("../controllers/Book.controller");

router.get("/", getBooks);
router.get("/:bookId", getBook);
router.post("/", addBook);
router.put("/:bookId", editBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
