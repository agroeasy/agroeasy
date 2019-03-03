import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
// import mongoosastic from 'mongoosastic';

//import esClient from '../../esClient';

import  models  from '../../db/models';

const { Product } = models;

// Product.plugin(mongoosastic, {
//     esClient,
// });

export default {
    searchProducts:  (req, res) => { 
        Product.search(
            { query_string: { query: req.body.search } },
            {
                hydrate: true,
                hydrateOptions: { select: 'name cost description quantity' },
                hydrateWithESResults: true,
            },
            (error, results) => {
                if (error) {
                    res.status(INTERNAL_SERVER_ERROR).json(error);
                }
                res.status(OK).json(results.hits.hits);
            });
    },
};
