const express = require('express')
const app = express()
const path = require('path')
const port = 2001
const paths = path.join(__dirname, './public')
app.use(express.static(paths));
app.get('/', (req, res) => {
    res.sendFile(paths)
})

app.listen(port, () => {
    console.log('server start')
})