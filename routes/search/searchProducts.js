import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { promisify } from 'util';

import models from '../../db/models';
import constants from '../product/constants';

const { PRODUCER_DATA } = constants;
const { Product } = models;

const productSearchAsync = promisify(Product.search).bind(Product);

export default {
    searchProducts: async (req, res) => {
        try {
            const products = await productSearchAsync(
                { match: req.query },
                { stored_fields: ['_id'] },
            );
            const esFoundProductIds = products.hits.hits.map(({ _id }) => _id);
            const foundProducts = await Product.find({ _id: { $in: esFoundProductIds } }).populate(
                'producerId',
                PRODUCER_DATA,
            );

            return res.status(OK).send({
                data: {
                    foundProducts,
                    numOfFoundProducts: products.hits.total,
                },
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
};
