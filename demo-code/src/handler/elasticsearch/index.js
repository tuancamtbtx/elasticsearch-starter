const esClient = require('../../elasticsearch')

module.exports = {
	search: async (query) => {
		return await esClient.search(query)
	},
	bulk: async (data) => {
		return await esClient.bulk(data)
	},
	info: async () => {
		return await esClient.info()
	},
	isNotExist: async(index) => {
		return await esClient.isExist(index)
	},
	mapping: async (index, body) => {
		return await esClient.initMapping(index, body)
	}
}
