const mongoose = require('mongoose')

const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/books')
    console.log('DB Conneted successfully.')

  } catch (er) {
    console.log("db connection failed", er);
  }
}

module.exports = ConnectDB;


