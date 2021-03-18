import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de web site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          created_at: new Date('2021-03-15 21:04:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdrawn',
          category: 'Casa',
          amount: 600,
          created_at: new Date('2021-03-16 08:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});
