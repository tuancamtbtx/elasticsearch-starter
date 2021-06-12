var elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.2',  // use the same version of your Elasticsearch instance
});

module.exports = {
  ping: async () => {
    let res = await client.ping({ requestTimeout: 1000 })
    return res
  },
  info: async () => {
    let res = await client.info()
    return res
  },
  isExist: async (index) => {
    let res = await client.indices.exists({
      index: index
    })
    return res
  },
  initMapping: async (index, body) => {
    let res = await client.indices.create({
      index: index,
      body: body
    }, { ignore: [400] })
    return res
  },
  createIndex: async (payload) => {
    let res = await client.create(payload)
    return res
  },
  search: async (payload) => {
    let data = await client.search(payload)
    return data
  },
  bulk: async (payload) => {
    let data = await client.bulk({body: payload})
    return data
  },

}