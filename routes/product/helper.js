const Product = require('../../db/models/product');
const { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } = require('./constants');

module.exports = {
    // finds all products in the db
    allProductsDetails: async (req, res) => {
        try {
            const data = await Product.find();
            return res.json({ data, success: true });
        } catch (error) {
            return res.json({ error, success: false });
        }
    },
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
            createdAt,
            deletedAt,
            name,
            producerId,
            quantity,
            typeOfProduct,
            updatedAt,
        });

        try {
            await product.save();
            return res.json({ message: ADD_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes products using id
    productDelete: async (req, res) => {
        try {
            const { body, params: { id: _id } } =  req;
            await Product.findByIdAndRemove(_id, body);
            return res.json({ message: DELETE_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // finds only products in the db with given id
    productDetails: async (req, res) => {
        try {
            const data = await Product.findById({ _id: req.params.id });
            return res.json({ data, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // updates products using id
    productUpdate: async (req, res) => {
        try {
            const { body, params:{ productsId: _id } } = req;
            const data = await Product.findOneAndUpdate(_id, body, { new: true } );

            return res.json ({ data, message: UPDATE_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

};
