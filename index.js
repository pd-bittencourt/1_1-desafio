const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

let userAge = ''

app.get('/', (req, res) => {
  return res.render('home')
})

app.get('/major', (req, res) => {
  return res.render('major', { userAge })
})

app.get('/minor', (req, res) => {
  return res.render('minor', { userAge })
})

app.post('/check', (req, res) => {
  userAge = req.body.age
  if (req.body.age >= 18) {
    return res.redirect('/major')
  } else {
    return res.redirect('/minor')
  }
})

app.listen(3000)
