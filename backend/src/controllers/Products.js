const ProductModels = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModels.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'internal Error' });
  }
};

module.exports = { getAllProducts };
