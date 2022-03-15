const Fuel = require('./Fuel')

test('Status da Gasolina', async () => {
  const gasolina = new Fuel('gasolina')
  expect(gasolina.getStatus()).toBe('gasolina cara')
})

test('Status do Etanol', async () => {
  const etanol = new Fuel('etanol')
  expect(etanol.getStatus()).toBe('etanol mais caro')
})

test('Status do Diesel', async () => {
  const etanol = new Fuel('diesel')
  expect(etanol.getStatus()).toBe('diesel super caro')
})

test('outro combustível', async () => {
  etanol = new Fuel('outro')
  expect(etanol.getStatus()).toBe('tudo caríssimo')
})
