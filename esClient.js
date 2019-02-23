import elasticSearch from 'elasticsearch';

export default new elasticSearch.Client({
    host: 'http://localhost:9200',
    log: 'trace',
});
