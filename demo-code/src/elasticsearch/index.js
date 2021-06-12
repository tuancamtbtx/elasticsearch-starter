var elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.2',  // use the same version of your Elasticsearch instance
});

module.exports = {
  ping: async () => {
    let res = await client.ping({requestTimeout: 1000})
    return res
  },
  search: async (body) => {
    let data = await client.search(body)
    return data
  },
  bulk: async (body) => {
    let data = await client.bulk(body)
    return data
  }
}