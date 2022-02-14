const { ObjectId } = require('mongodb');
const connection = require('./connection');

// const createProduct = async (productsData, productId) => {
//   const db = await connection();
//   const products = await db.collection('products').insertOne({...productsData, productId });
//   return { ...}
// };

const getAllProducts = async () => {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return products;
};

const updateProductPrice = async (id) => {
  const db = await connection();
  await db.collection('products').updateOne({
    _id: ObjectId(id),
  }, {
    $inc: {
      price: 5,
    },
  });
};

module.exports = { getAllProducts, updateProductPrice };
