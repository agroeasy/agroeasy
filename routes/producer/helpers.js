import CONSTANTS from './constants';
import models from '../../db/models/';

const { Producer } = models;
const { ADD_PRODUCER, DELETE_PRODUCER, UPDATE_PRODUCER } = CONSTANTS;

export default {
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
        try {
            const { typeOfProducts } = req.body;
            const producer = { ...new Producer() , typeOfProducts };

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
