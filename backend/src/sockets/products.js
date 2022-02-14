const { updateProductPrice, getProductById } = require('../models/Product');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('bid', async ({ id }) => {
    console.log(`Cliente ${id} Deu um lance`);

    await updateProductPrice(id);
    const product = await getProductById(id);
    io.emit('refreshPrice', product);
  });
});

// Referencia

// module.exports = (io) => io.on('connection', (socket) => {
//   socket.on('increaseVotes', async ({ id }) => {
//     console.log(`Cliente votou na linguagem de id ${id}`);
//     await Language.increaseVotes(id);
//     const language = await Language.getById(id);
//     io.emit('refreshCurrentVotes', language);
//   })
// });
