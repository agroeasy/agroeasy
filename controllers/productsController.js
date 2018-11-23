const Product = require('../models/product');
const { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } = require('./constants');

module.exports = {
    productCreate: async (req, res) => {
        const {
            name,
            quantity,
            producerId,
            typeOfProduct,
            createdAt,
            updatedAt,
            deletedAt,
        } = req.body;

        const product = Object.assign( new Product(), {
            name,
            quantity,
            producerId,
            typeOfProduct,
            createdAt,
            updatedAt,
            deletedAt,
        });

        try {
            await product.save();
            return res.json({ success: true, message: ADD_PRODUCT });
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
            const { body, params: { id: _id } } =  req;
            await Product.findByIdAndRemove(_id, body);
            return res.json({ success: true, message: DELETE_PRODUCT });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // updates products using id
    productUpdate: async (req, res) => {
        try {
            const { body, params:{ productsId: _id } } = req;
            const data = await Product.findOneAndUpdate(_id, body, { new: true } );

            return res.json ({ data, success: true, message: UPDATE_PRODUCT });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

};
