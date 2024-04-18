require('dotenv').config()

// import express from "express"
// OR
const express = require('express')

const app = express()   //app gets all functionality of "express"
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! Vinay')
})

app.get('/twitter', (req, res) => {
    res.send('Vinay Duryodhan')
})

app.get('/login', (req, res) => {
    res.send('<h2>Login with Vinay</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})