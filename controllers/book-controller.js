const book = require("../models/book");


const getAllBooks = async (req, res) => {
  try {
    const getAllBook = await book.find({});

    if (getAllBook.length > 0) {
      res.status(200).json({
        success: true,
        message: 'List of all books fetched successfully.',
        data: getAllBook
      })
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in database."
      })
    }

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!"
    })
  }
}

const getSingleBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const findBookById = await book.findById(id);

    if (!findBookById) {
      res.status(404).json({
        success: false,
        message: 'Book is not found by this id',
      })
    }

    res.status(200).json({
      success: true,
      message: 'Book fetched by id',
      data: findBookById
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!"
    })
  }
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
    res.status(500).json({
      success: false,
      message: "Something went wrong!!"
    })
  }
}

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedBookData = req.body;
    const updatedBook = await book.findByIdAndUpdate(id, updatedBookData, { new: true });

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found.'
      })
    }

    res.status(200).json({
      success: true,
      message: "Book Updated",
      data: updatedBook,
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!"
    })
  }
}

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id
    const deleteBook = await book.findByIdAndDelete(id);

    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found.'
      })
    }

    res.status(200).json({
      succes: true,
      message: "Book deleted.",
      data: deleteBook
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!"
    })
  }
}

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook }