const express = require('express')
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('home')
})

app.listen(port, hostname, () => {
	console.log(`The Server is listening on http://${hostname}:${port}`)
})
