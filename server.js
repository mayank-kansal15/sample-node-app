const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send('Hello World!');
});
app.get('/health', (req, res) => {
    res.send('I am healthy, thanks!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
