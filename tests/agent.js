import nock from 'nock';
import url from "url";

export default nock(
    url.format({
        hostname: "127.0.0.1",
        port: 4000,
        protocol: "http",
    })
);

