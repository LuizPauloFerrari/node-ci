const express = require('express')
const app = express()
const Fuel = require('./Fuel')
const port = 3000

app.get('/', (req, res) => {
  console.log(req.url)
  const gasolina = new Fuel('gasolina');
  res.send(gasolina.getStatus('etanol'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))