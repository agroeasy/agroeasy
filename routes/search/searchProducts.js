import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { promisify } from 'util';
import  models  from '../../db/models';

const { Product } = models;

const productSearchAsync = promisify(Product.search).bind(Product);

export default {
    searchProducts:  async (req, res) => {
        try {
            const products = await productSearchAsync(
                { query_string: { query: req.params.name } },
                {
                    hydrate: true,
                    hydrateOptions: { 
                        select: 'name cost description quantity', 
                    },
                    hydrateWithESResults: true,
                });

            const esFoundProductIds = products.hits.hits.map(({ _id }) => _id);
            const foundProducts = await Product.find({ _id: { $in: esFoundProductIds } });

            return res.status(OK).json(foundProducts);
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
};
