const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send('Hello World!');
});
app.get('/v1/app-name', (req, res) => {
    console.log("Sample-node-app");
    res.send('Sample-node-app');
});
app.get('/health', (req, res) => {
    res.send('I am healthy, thanks!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
