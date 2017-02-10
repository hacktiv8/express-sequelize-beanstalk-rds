const express = require('express')
const app = express()

const models = require('./models')

app.get('/', (req, res) => {
  models.Quotes.findOne()
    .then((quote) => {

      res.send(quote)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
