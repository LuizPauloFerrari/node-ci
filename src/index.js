let express = require('express')
let app = express()
let port = 3000
const Fuel = require('./Fuel')
app.disable("x-powered-by");

app.get('/', (req, res) => {
  console.log(req.url)
  const gasolina = new Fuel('gasolina');
  res.send(gasolina.getStatus('etanol'))
})

app.listen(port, () => {
  console.log(`Example App listening on port ${port}!`)
  console.log(`001`)
  console.log(`002`)
  console.log(`003`)
  console.log(`004`)
  console.log(`005`)
  console.log(`006`)
  console.log(`007`)
  console.log(`008`)
})