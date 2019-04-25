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

app.get('/', (req, res) => {
  return res.render('home')
})

app.post('/check', (req, res) => {
  console.log(req.body)
  if (req.body.age > 18) {
    return res.redirect('/major')
  } else {
    return res.redirect('/minor')
  }
})

app.listen(3000)
