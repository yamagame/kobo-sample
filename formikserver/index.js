const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send(`hello ${port}`)
})

app.post('/form', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  )
})
