import elasticSearch from 'elasticsearch';

export default new elasticSearch.Client({
    host: process.env.ELASTIC_SEARCH_SERVER,
    log: 'trace',
});
