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
  console.log(`1`)
  console.log(`2`)
  console.log(`3`)
  console.log(`4`)
  console.log(`5`)
  console.log(`6`)
  console.log(`7`)
  console.log(`8`)
})