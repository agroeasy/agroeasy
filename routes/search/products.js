import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';

import esClient from '../../esClient';

export default {
    searchProducts: async (req, res) => {
        try {
            const response = await esClient.search({
                body: {
                    query: {
                        match: {
                            'name': req.query.q,
                        },
                    },
                },
                index: 'all_product',
                type: 'products',
            });
               
            res.status(OK).json(response.hits);
        } catch (error){
            res.status(INTERNAL_SERVER_ERROR).json(error);
        }
    },
};
