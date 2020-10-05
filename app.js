// require necessary modules in this project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// listening
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
