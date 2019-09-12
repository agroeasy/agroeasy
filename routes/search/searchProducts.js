import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
const algoliasearch = require('algoliasearch');

import models from '../../db/models';
import constants from '../product/constants';

const { PRODUCER_DATA } = constants;
const { Product } = models;

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_APP_ADMIN_KEY);
const index = client.initIndex('products');

export default {
    searchProducts: async (req, res) => {
        //TODO: Add search by category or filtering
        try {
            const products = await index.search(`${req.query.description}`, {
                analytics: false,
                attributesToRetrieve: ['_id'],
                attributesToRetrieve: '*',
                attributesToSnippet: '*:20',
                facets: '*,',
                getRankingInfo: true,
                hitsPerPage: 10,
                page: 0,
                responseFields: '*',
                snippetEllipsisText: '…',
            });

            const esFoundProductIds = products.hits.map(({ _id }) => _id);
            const foundProducts = await Product.find({ _id: { $in: esFoundProductIds } }).populate(
                'producerId',
                PRODUCER_DATA,
            );

            return res.status(OK).send({
                data: {
                    foundProducts,
                    numOfFoundProducts: products.nbHits,
                },
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
};
