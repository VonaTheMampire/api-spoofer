const express = require('express')
const app = express()
const port = 666
const requests = require('./requests')
const cors = require('cors')

app.use(cors())

Object.keys(requests).forEach(requestURL => {
  app[requests[requestURL].method](requestURL, (req, res) => {
    res.send(requests[requestURL].return)
  })
})

app.get('/', (req, res) => res.send(Object.keys(requests)))

app.listen(port, () => console.log(`Running on ${ port }!`))