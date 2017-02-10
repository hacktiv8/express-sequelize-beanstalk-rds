const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello, ebs!')
})

app.listen(80, () => {
  console.log('Server running at http://localhost:80/')
})
