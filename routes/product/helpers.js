import _pick from 'lodash.pick';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Product } = models;
const { ADD_PRODUCT, DELETE_PRODUCT, CREATE_KEYS, UPDATE_PRODUCT } = CONSTANTS;

export default {
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
        try {
            const productData = _pick(req.body, CREATE_KEYS);
            const product = { ...new Product(), ...productData };

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
