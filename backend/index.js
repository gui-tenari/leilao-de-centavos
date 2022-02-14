const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  },
});

const { getAllProducts } = require('./src/controllers/Products');

require('./src/sockets/products')(io);

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.get('/', getAllProducts);

http.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
