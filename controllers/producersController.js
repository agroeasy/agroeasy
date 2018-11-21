const Producer = require('../models/producer');
const { ADD_PRODUCER, DELETE_PRODUCER, UPDATE_PRODUCER } = require('./constants');

module.exports = {
    producerCreate: async(req, res) => {
        const {
            firstName,
            lastName,
            phoneNumber,
            country,
            state,
            localGovernment,
            address,
            typeOfProducts,
            createdAt,
            updatedAt,
            deletedAt
        } = req.body;

        const producer = Object
            .assign(new Producer(), {
                firstName,
                lastName,
                phoneNumber,
                country,
                state,
                localGovernment,
                address,
                typeOfProducts,
                createdAt,
                updatedAt,
                deletedAt
            });

        try {
            await producer.save();
            return res.json({ success: true, message: ADD_PRODUCER });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // find producers by id
    producerDetails: async(req, res) => {
        try {
            const data = await Producer.findById({ _id: req.params.id });
            return res.json({ data, success: true });
        } catch (err) {
            res.send({ success: false, err });
        }
    },

    // finds all the producers in the database
    allProducersDetails: async(req, res) => {
        try {
            const data = await Producer.find();
            return res.json({ success: true, data });
        } catch (err) {
            res.json({ success: false, err });
        }
    },

    // deletes producer using id
    producerDelete: async(req, res) => {
        try {
            const { body, params: { id: _id } } = req; 
            await Producer.findOneAndRemove(_id, body);
            
            return res.json({ success: true, message: DELETE_PRODUCER });
        } catch (err) {
            res.send({ success: false, err });
        }
    },
    // updates producer using id

    producerUpdate: async(req, res) => {
        try {
            const{ body, params:{ producersId: _id } } = req;
            const data = await Producer.findOneAndUpdate( _id, body, { new: true });

            return res.json({ data, success: true, message: UPDATE_PRODUCER });
        } catch (err) {
            res.send({ success: false, err });
        }
    }
};
