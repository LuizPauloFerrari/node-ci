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

test('Status do Gás', async () => {
  const etanol = new Fuel('gas')
  expect(etanol.getStatus()).toBe('gas subiu')
})

test('outro combustível', async () => {
  etanol = new Fuel('outro')
  expect(etanol.getStatus()).toBe('tudo caríssimo')
})

test('Preço da Gasolina', async () => {
  const gasolina = new Fuel('gasolina')
  expect(gasolina.getPrice()).toBe(7.5)
})

test('Preço do Etanol', async () => {
  const etanol = new Fuel('etanol')
  expect(etanol.getPrice()).toBe(5.5)
})

test('Preço do Diesel', async () => {
  const etanol = new Fuel('diesel')
  expect(etanol.getPrice()).toBe(6)
})

test('Preço do Gás', async () => {
  const etanol = new Fuel('gas')
  expect(etanol.getPrice()).toBe(133)
})

test('Preço de outro combustível', async () => {
  etanol = new Fuel('outro')
  expect(etanol.getPrice()).toBe(100)
})
