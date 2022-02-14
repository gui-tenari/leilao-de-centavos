const app = require('express')();
const cors = require('cors');
const io = require('socket.io');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
