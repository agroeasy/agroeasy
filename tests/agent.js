const nock = require('nock');
const url = require("url");

module.exports = nock(
    url.format({
        hostname: "127.0.0.1",
        port: 4000,
        protocol: "http",
    })
);

