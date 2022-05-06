const router = require('express').Router();
const { Product } = require('../db/models/index');

router.route('/')
  .get(async (req, res) => {
    const allProducts = await Product.findAll({ raw: true });
    res.render('content', { allProducts });
  })
  .post(async (req, res) => {
    try {
      const newProduct = await Product.create({
        productName: req.body.productName,
        category: req.body.category,
        expires: req.body.expires,
        source: req.body.source,
      });
      res.json({ newProduct });
    } catch (error) {
      console.log(error.message);
      res.end();
    }
  });

module.exports = router;
