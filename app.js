// require necessary modules and define server related variables in this project
const express = require('express')
const app = express()
const port = 3000
// handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    setChecked: function (value, currentValue, option) {
      if (value === currentValue) {
        return option.fn(this)
      } else {
        return option.inverse(this)
      }
    }
  }
}))
app.set('view engine', 'handlebars')

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// generate_rubbish_word.js
const generateRubbishWord = require('./generate_rubbish_word.js')

// setting static files
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // console.log('req.body.occupation:', req.body.occupation)
  // generateRubbishWord(req.body.occupation)
  const option = req.body.occupation
  const rubbishWord = generateRubbishWord(option)
  res.render('index', { option, rubbishWord })
})

// listening
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
