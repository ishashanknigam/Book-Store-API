require('dotenv').config()

const express = require('express');
const ConnectDB = require('./database/db')
const bookRoutes = require('./routes/book-routes')

const app = express();
const PORT = process.env.PORT || 3000;

//connect to out db
ConnectDB();

//middlewares -> express.json()
app.use(express.json());

//routes
app.use('/api/books', bookRoutes)


app.listen(PORT, () => {
  console.log("Sever started.")
})

