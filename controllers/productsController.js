const Product = require('../models/product');

module.exports = {
    productCreate: async (req, res) => {
        // post new products to the database
        let product = new Product();
        // body parser lets us use the req.body
        const {
            name,
            quantity,
            producerId,
            typeOfProduct,
            createdAt,
            updatedAt,
            deletedAt
        } = req.body;

        product = Object.assign(product, {
            name,
            quantity,
            producerId,
            typeOfProduct,
            createdAt,
            updatedAt,
            deletedAt
        });

        try {
            await product.save();
            return res.json({ success: true, message: 'Product successfully added!' });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // finds only products in the db with given id
    productDetails: async (req, res) => {
        try {
            const data = await Product.findById({ _id: req.params.id });
            return res.json({ success: true, data });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // finds all products in the db
    allProductsDetails: async (req, res) => {
        try {
            const data = await Product.find();
            return res.json({ success: true, data });
        } catch (err) {
            return res.json({ success: false, error: err });
        }
    },

    // deletes products using id
    productDelete: async (req, res) => {
        try {
            await Product.findByIdAndRemove({ _id: req.params.id });
            return res.json({ success: true, message: 'Product successfully deleted!' });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // updates products using id
    productUpdate: async (req, res) => {
        try {
            const data = await Product.findOneAndUpdate({ _id: req.params.productsId }, req.body, { new: true });
            return res.json({ data, success: true, message: 'Product successfully updated' });
        } catch (err) {
            res.send({ success: false, err });
        }
    }

};
