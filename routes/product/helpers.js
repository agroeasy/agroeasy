import _pick from 'lodash.pick';
import mongodb from 'mongodb';
import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Product } = models;
const { ObjectID } = mongodb;
const { CREATE_KEYS, PRODUCT_CREATED, PRODUCT_DELETED, PRODUCT_UPDATED, PRODUCER_DATA } = CONSTANTS;

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
    //clean up invalid products and producers
    cleanProductsWithInvalidProducerId: async (req, res) => {
        try {
            const data = await Product.find();
            const invalidProducer = data.map(dataitem => {
                if (!ObjectID.isValid(dataitem.producerId) || !ObjectID.isValid(dataitem._id)) {
                    return dataitem._id;
                }
            });

            await Product.deleteMany({ _id: { $in: invalidProducer } });

            return res.json({ data, success: true });
        } catch (error) {
            return res.json({ error, success: false });
        }
    },

    /**
     * Finds a list of items by a given producer id.
     *
     * @function
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Object} - the response after processing the request
     */
    getProductsByUserId: async(req, res) => {
        try {
            const data = await Product.find({ producerId: req.params.id });
            return res.json({ data, success: true });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error, message: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },

    productCreate: async (req, res) => {
        try {
            const productData = _pick(req.body, CREATE_KEYS);
            const product = new Product(productData);

            await product.save();

            return res.json({ data: product, message: PRODUCT_CREATED, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes products using id
    productDelete: async (req, res) => {
        try {
            const { body, params: { id: _id } } =  req;
            await Product.findByIdAndRemove(_id, body);
            return res.json({ message: PRODUCT_DELETED, success: true });
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

            return res.json ({ data, message: PRODUCT_UPDATED, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // finds products with associated producers
    productsWithRelatedProducers: async (req, res) => {
        try {
            const data = await Product.find()
                .populate('producerId', PRODUCER_DATA)
                .exec();

            return res.json({ data, success: true });
        } catch (error) {
            return res.json({ error, success: false });
        }
    },

    /**
     * Either updates an item or creates an entirely new item for a given producer.
     *
     * @function
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Object} - the response after processing the request
     */
    updateOrCreateItem: async(req, res) => {
        try {
            const { body: product } = req;
            const { _id, producerId } = product;
            let data, message;

            if (ObjectID.isValid(_id)) {
                const filter = {
                    $and: [
                        { _id: { $eq: _id } },
                        { producerId: { $ne: null } },
                        { producerId: { $eq: producerId } },
                    ],
                };

                await Product.updateOne(filter, product);

                data = product;
                message = PRODUCT_UPDATED;
            } else {
                // Redundancy: deletes possible invalid/valid '_id'
                delete product._id;
                
                data = await Product.create(product);
                message = PRODUCT_CREATED;
            }

            return res.json({ data, message, success: true });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error, message: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },

};
