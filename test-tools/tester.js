const api = require('./api');

async function main() {
  await api.post('/users', {
    name: 'Aaron',
    email: 'aaron@gmail.com',
    age: 10,
  })

  await api.get('/users')
}

main()