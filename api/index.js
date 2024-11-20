
const Express = require('express');
const App = Express();

App.get('/post/:userid/:addxp', (request, response) => {
  console.log('hello')
});

App.get('/', (request, response) => response.send(''));
App.listen(3000, () => console.log('Database listening at http://localhost:3000'));
