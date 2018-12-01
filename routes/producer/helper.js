const Producer = require("../../db/models/producer");
const { ADD_PRODUCER, DELETE_PRODUCER, UPDATE_PRODUCER } = require('./constants');

module.exports = {
    // finds all the producers in the database
    allProducersDetails: async (req, res) => {
        try {
            const data = await Producer.find();
            return res.json({ data, success: true });
        } catch (err) {
            res.json({ err, success: false });
        }
    },
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
            deletedAt,
        } = req.body;

        const producer = Object
            .assign(new Producer(), {
                address,
                country,
                createdAt,
                deletedAt,
                firstName,
                lastName,
                localGovernment,
                phoneNumber,
                state,
                typeOfProducts,
                updatedAt,
            });

        try {
            await producer.save();
            return res.json({ message: ADD_PRODUCER, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes producer using id
    producerDelete: async(req, res) => {
        try {
            const { body, params: { id: _id } } = req;
            await Producer.findOneAndRemove(_id, body);

            return res.json({ message: DELETE_PRODUCER, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // find producers by id
    producerDetails: async(req, res) => {
        try {
            const data = await Producer.findById({ _id: req.params.id });
            return res.json({ data, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // updates producer using id
    producerUpdate: async(req, res) => {
        try {
            const{ body, params:{ producersId: _id } } = req;
            const data = await Producer.findOneAndUpdate( _id, body, { new: true });

            return res.json({ data,  message: UPDATE_PRODUCER, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },
};
