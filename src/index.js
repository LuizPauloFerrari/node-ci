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
  console.log(`Example app listening on port ${port}!`)
  console.log(`01`)
  console.log(`02`)
  console.log(`03`)
  console.log(`04`)
  console.log(`05`)
  console.log(`06`)
  console.log(`07`)
  console.log(`08`)
})