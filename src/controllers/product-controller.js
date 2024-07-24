const Product = require('../models/product-model');
const ProductService = require('../services/product-service');

let productService = new ProductService();

exports.get = (req, res) => {
    res.json(productService.getAll())
};

exports.post = (req, res) => {
    res.json(productService.add(
        new Product(req.body.name, req.body.price)
    ));
};

exports.getById = (req, res) => {
    res.json(productService.getById(req.params.id));
};

exports.put = (req, res) => {
    res.json(
        productService.update(
            req.params.id,
            new Product(req.body.name, req.body.price)
        )
    );
};

exports.delete = (req, res) => {
    res.json(productService.delete(req.params.id));
};