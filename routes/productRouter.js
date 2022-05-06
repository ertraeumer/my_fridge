const router = require('express').Router();
const { Product } = require('../db/models/index');

router.route('/')
  .get(async (req, res) => {
    try {
      const allProducts = await Product.findAll({ raw: true });
      res.render('content', { allProducts });
    } catch (error) {
      console.log('Ошибка при нахождении продуктов в БД:', error.message);
    }
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
      console.log('Ошибка при создании продукта в БД:', error.message);
      res.end();
    }
  });

router.route('/:id')
  .delete(async (req, res) => {
    try {
      await Product.destroy({ where: { id: req.params.id } });
      res.end();
    } catch (error) {
      console.log('Ошибка при удалении продукта из БД:', error.message);
      res.end();
    }
  });

module.exports = router;
