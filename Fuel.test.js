const Fuel = require('./Fuel')

test('Status da Gasolina', async () => {
  gasolina = new Fuel('gasolina')
  expect(gasolina.getStatus()).toBe('gasolina cara')
})

test('Status do Etanol', async () => {
  etanol = new Fuel('etanol')
  expect(etanol.getStatus()).toBe('etanol mais caro')
})

test('outro combustível', async () => {
  etanol = new Fuel('outro')
  expect(etanol.getStatus()).toBe('tudo caríssimo')
})