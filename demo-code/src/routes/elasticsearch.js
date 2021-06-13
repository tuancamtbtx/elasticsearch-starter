const express = require('express')
const esHandler = require("../handler/search")
const input = require('../handler/input')
let router = express.Router();

router.get('/search', async (req, res) => {
	return res.render('pages/index', { data: { keyword: '', result: null } });
})
router.post('/search', async (req, res) => {
	let { keyword } = req.body
	let data = await esHandler.search({
		index: 'hcmus_data',
		body: {
			"query": {
			  "match": {
				"content": {
				  "query": keyword,
				  "operator": "or",
				  "zero_terms_query": "all"
				}
			}
		  }
		}
	})
	return res.render('pages/index', {
		data: {
			keyword: keyword,
			result: data
		}
	});
})

router.get('/bulk', async (req, res) => {
	let data = input.load("./src/common/data.json")
	const bulkData = data.flatMap(doc => [{ index: { _index: 'hcmus_data' } }, doc])
	let isNotExist = await esHandler.isNotExist("hcmus_data")
	if (!isNotExist) {
		await esHandler.mapping("hcmus_data", {
			mappings: {
				properties: {
					id: { type: 'integer' },
					content: { type: 'text' },
					url: { type: 'text' }
				}
			}
		})
	}
	let bulk = await esHandler.bulk(bulkData)
	return res.json({
		"status": true,
		"data": bulk
	})
})
module.exports = {
	router
}
