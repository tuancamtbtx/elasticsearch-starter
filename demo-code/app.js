const express = require('express')
const app = express()
const port = 50000

app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	res.json({
		status: true,
		message: "es-demo"
	})
})
app.get('/demo', (req, res) => {
	res.render('pages/index');
})
app.listen(port, () => {
  console.log(`Example app listening at port:${port}`)
})