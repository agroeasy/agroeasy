const db = require('../helpers/db');

const Producer = db.Producer;

module.exports = {
  producerCreate: async (req, res) => {
    //  post new producer to the database
    let producer = new Producer();

    //  body parser lets us use the req.body
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

    producer = Object
      .assign(producer, {
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
      return res.json({ success: true, message: 'Producer successfully added!' });
    } catch (err) {
      res.send({ success: false, err });
    }
  },

  // find producers by id
  producerDetails: async (req, res) => {
    try {
      const data = await Producer.findById({ _id: req.params.id });
      return res.json({ data, success: true });
    } catch (err) {
      res.send({ success: false, err });
    }
  },

  // finds all the producers in the database
  allProducersDetails: async (req, res) => {
    try {
      const data = await Producer.find();
      return res.json({ success: true, data });
    } catch (err) {
      res.json({ success: false, err });
    }
  },

  // deletes producer using id
  producerDelete: async (req, res) => {
    try {
      await Producer.findOneAndRemove({ _id: req.params.id }, req.body);
      return res.json({ success: true, message: 'Producer successfully deleted!' });
    } catch (err) {
      res.send({ success: false, err });
    }
  },
  // updates producer using id

  producerUpdate: async (req, res) => {
    try {
      const data = await Producer.findOneAndUpdate({ _id: req.params.producersId }, req.body, { new: true });
      return res.json({ data, success: true, message: 'Producer successfully updated!' });
    } catch (err) {
      res.send({ success: false, err });
    }
  }
};
