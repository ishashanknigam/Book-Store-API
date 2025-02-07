const book = require("../models/book");


const getAllBooks = async (req, res) => {

}

const getSingleBookById = async (req, res) => {

}

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: 'book created',
        data: newlyCreatedBook
      })
    }

  } catch (e) {
    console.log(e);
  }

}

const updateBook = async (req, res) => {

}

const deleteBook = async (req, res) => {

}

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook }