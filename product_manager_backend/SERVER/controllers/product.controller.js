const Product = require('../models/product.model');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({product: newlyCreatedProduct})
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({users: allDaProducts})
        })
        .catch((err) => {
            res.json(err)
        });
}
