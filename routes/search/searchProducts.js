import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { promisify } from 'util';
import  models  from '../../db/models';

const { Product } = models;

const productSearchAsync = promisify(Product.search);

export default {
    searchProducts:  async (req, res) => { 
        try {
            const products = await productSearchAsync(
                { query_string: { query: req.body.search } },
                {
                    hydrate: true,
                    hydrateOptions: { select: 'name cost description quantity' },
                    hydrateWithESResults: true,
                });

            return res.status(OK).json(products);
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }

/* 
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
            }); */
    },
};
