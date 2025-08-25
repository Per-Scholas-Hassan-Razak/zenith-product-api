require('dotenv').config()
const app = require("./src/app")
const port = process.env.PORT || 30001
const dbConnection = require("./src/config/connection.js")

dbConnection().then(() => {
    app.listen(port, () => {
        console.log(`Express server running on http://localhost:${port}`)
    })
})

