const { Schema, model } = require("mongoose");

// "name": "Slow Horses (Deluxe Edition)",
// "author": "Mick Herron",
// "thumbnail": "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
// "price": 14,
// "rating": "3",
// "featured": true,

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Book = model("book", bookSchema);

module.exports = Book;
