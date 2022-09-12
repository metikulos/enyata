require('dotenv').config()
const app = require('./app');

const port = process.env.PORT
const siteName = process.env.SITE_NAME
app.listen(port,() => {
	console.log(`${siteName} API is running on port: ${port}`)
})