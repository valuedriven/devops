const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

it('Lista produtos', async () => {
  const payload = { nomeProduto: 'Produto1', estoque: 1};
  await request.post('/produtos').send(payload);
  response = await request.get('/produtos');
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThanOrEqual(1);
})

it('Inclui produto', async () => {
  const payload = { nomeProduto: 'Produto1', estoque: 1};
  const response = await request.post('/produtos').send(payload);
  expect(response.status).toBe(200);
  expect(response.text).toBe('Produto incluído com sucesso!');
})
