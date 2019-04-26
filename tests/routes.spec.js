const assert = require('assert');
const request = require ('supertest');

const server = require('../server');
const agent = require('./agent');

let mochAgent;
beforeEach(() => {
    mochAgent = agent;
});

describe("GET /product/findAll", () => {
    const URL = "/product/findAll";

    it("should return all products", async () => {
        const allProducts = {};
        const body = {};
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
  
