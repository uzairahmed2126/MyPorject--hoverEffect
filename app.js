const express = require('express')
const app = express()
const path = require('path')
const port = 9002
const paths = path.join(__dirname, 'index.html')
app.use(express.static(paths));
app.get('/', (req, res) => {
    res.sendFile(path.join(paths))
})

app.listen(port, () => {
    console.log('server start')
})