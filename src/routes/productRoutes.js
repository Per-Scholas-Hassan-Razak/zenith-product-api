const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({message:"Product Routes are active"})
})

module.exports = router