import _pick from 'lodash.pick';
import mongodb from 'mongodb';
import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Cart } = models;
const { ObjectID } = mongodb;
const { CREATE_KEYS, CART_CREATED, CART_REMOVED_ALL, CART_REMOVED_ONE, CART_UPDATED } = CONSTANTS;

const getUserCart = async user => {
    try {
        const query = [
            { $match: { user } },
            {
                $lookup: {
                    as: 'product',
                    from: 'products',
                    let: { product: '$product' },
                    pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$product'] } } }],
                },
            },
            { $unwind: '$product' },
            {
                $project: {
                    cost: '$product.cost',
                    createdAt: 0,
                    imageUrl: '$product.imageUrl',
                    name: '$product.name',
                    updatedAt: 0,
                    user: 0,
                },
            },
        ];
        return await Cart.aggregate(query).exec();
    } catch (error) {
        return error;
    }
};

export default {
    // create/adds a new item to the cart
    cartCreate: async (req, res) => {
        try {
            const cartData = _pick(req.body, CREATE_KEYS);
            new Cart(cartData);
            await Cart.save();
            const cart = await getUserCart(req.user._id);
            return res.json({ cart, message: CART_CREATED, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes all cart items of a particuler user
    cartDeleteAll: async (req, res) => {
        try {
            await Cart.deleteMany({ user: req.user._id });
            return res.json({ cart: [], message: CART_REMOVED_ALL, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // delete cart item using id
    cartDeleteOne: async (req, res) => {
        try {
            await Cart.deleteOne({ _id: req.params._id });
            const cart = await getUserCart(req.user._id);
            return res.json({ cart, message: CART_REMOVED_ONE, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // update cart item using id
    cartUpdate: async (req, res) => {
        try {
            const {
                body: { quantity, amount },
                params: { cartId: _id },
            } = req;
            await Cart.updateOne(_id, { amount, quantity });
            const cart = await getUserCart(req.user._id);
            return res.json({ cart, message: CART_UPDATED, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    /**
     * Finds a list of cart items which belonges to a user
     *
     * @function
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Object} - the response after processing the request
     */
    getCartsByUserId: async (req, res) => {
        try {
            const cart = await getUserCart(req.user._id);
            return res.json({ cart, success: true });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error, message: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },
};
