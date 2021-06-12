const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/routes')
const app = express()
const port = 50000

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/", router.elasticsearchRoute)

app.use((req, res, next) => {
    res.status(404).send('404 page!');
});
app.listen(port, () => { console.log(`app listening at port:${port}`) })