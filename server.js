require('dotenv').config() // load variables from .env into process.env
const express = require('express') // backend framework
const PORT = 3010
const budget = require('./models/budget.js') // import budget data
const morgan = require('morgan') // import morgan (logging) library
const app = express()
app.use(morgan('dev')) // logging middleware
const methodOverride = require('method-override')
const { request } = require('express')
app.use(methodOverride('_method')) // swap the method if the url has a ?_method=XXX query


app.use(express.static('public'))

// HOME ROUTE
app.get('/', (req, res) => {
  res.redirect('/budget')
})

// INDEX ROUTE-GET

app.get('/budget', (req, res) => {
  res.render('index.ejs', {budget}) 
})
app.get('/new', (req, res) => {
  res.render('new.ejs')
})

// SHOW ROUTES

app.get('/budget/:index', (req, res) => {
  // res.render(template, data)
  res.render('show.ejs', {
   lineItem: budget[req.params.index]
  })
})
  // CREATE ROUTE-POST

app.post('/budget', (req, res) => { })
  
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })

