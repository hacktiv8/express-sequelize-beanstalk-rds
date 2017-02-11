const express = require('express')
const app = express()

const models = require('./models')

app.get('/', (req, res) => {
  models.newquotes.findOne()
    .then((quote) => {
      res.send(quote)
    })
    .catch((err) => {
      res.send(err)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
