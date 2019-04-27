import assert from 'assert';
import request from 'supertest';

import server from '../../server';
import agent from '../agent';
import { PRODUCTS } from '../constants';

let mochAgent;
beforeEach(() => {
    mochAgent = agent;
});

describe("GET /product/findAll", () => {
    const URL = "/product/findAll";

    it("should return all products", async () => {
        const allProducts = PRODUCTS;
        const body = PRODUCTS;
        mochAgent.get(URL).reply(200, body);

        await request(server)
            .get(URL)
            .send(allProducts)
            .expect(200)
            .then(res => {
                assert.deepEqual(res.body, body);
            });
    });
});
  
describe("GET /producerId/:id", () => {
    const URL = "/producerId/5c83be625a9ec76168a52c5d";
    const oneProduct = PRODUCTS.data[0];

    it("should return a product with the given producerId", async () => {
        const product = oneProduct;
        const body = oneProduct;
        mochAgent.get(URL).reply(200, body);

        await request(server)
            .get(URL)
            .send(product)
            .expect(200)
            .then(res => {
                assert.deepEqual(res.body, body);
            });
    });
});
