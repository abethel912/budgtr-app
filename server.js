require('dotenv').config();
const { Console } = require('console');
const express = require('express');
const app = express();
const PORT = 3010;


// HOME ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to the Budgtr!')
});

// INDEX ROUTE-GET

app.get('/budgets', (req, res) => {
  res.render('budgets_index.ejs',)
})
app.get('/new', (req, res) => {
  res.render('new_index.ejs')
})

// SHOW ROUTES

app.get('/budgets/:index', (req, res) => {
  res.render('budgets_show.ejs', {
    allDrinks: drinks[request.params.id]
  });

  // CREATE ROUTE-POST

  app.post('/budgets', (req, res) => {
  })

  app.listen(PORT, () => {
    console.log('Listening on PORT 3010')
  })
  })
