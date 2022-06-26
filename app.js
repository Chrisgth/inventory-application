const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const dbURI = process.env.DB_URI

app.listen(3000)

app.get('/', (req, res) => {
  console.log(dbURI)
  console.log(process.env.USER_ID)
})