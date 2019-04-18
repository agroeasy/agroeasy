import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { promisify } from 'util';
import  models  from '../../db/models';

const { Product } = models;

const productSearchAsync = promisify(Product.search).bind(Product);

export default {
    searchProducts:  async (req, res) => {
        try {
            const products = await productSearchAsync(
                { term: req.query },
                { stored_fields : ["_id"] },
                
            );

            const esFoundProductIds = products.hits.hits.map(({ _id }) => _id);
            const foundProducts = await Product.find({ _id: { $in: esFoundProductIds } });

            return res.status(OK).json({ foundProducts, numOfFoundProducts: products.hits.total });
        } catch (error) {
            console.log(error);
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
};
