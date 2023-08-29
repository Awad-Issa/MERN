const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/product/new', ProductController.createNewProduct);
    app.get('/api/product', ProductController.findAllProduct);

}