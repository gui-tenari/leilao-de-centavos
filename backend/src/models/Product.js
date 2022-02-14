const { ObjectId } = require('mongodb');
const connection = require('./connection');

// const createProduct = async (productsData, productId) => {
//   const db = await connection();
//   const result = await db.collection('products').insertOne({...productsData, productId });
//   return { ...productsData, productId, _id: result.insertedId };
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

const getProductById = async (id) => {
  const db = await connection();
  const product = await db.collection('products').findOne({ _id: ObjectId(id) });
  return product;
};

module.exports = { getAllProducts, updateProductPrice, getProductById };
