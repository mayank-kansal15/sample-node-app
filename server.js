const express = require('express')
const fs = require("fs");
const app = express()
const port = 8000
const logFilePath = "/sample-node-app/combined.log";

app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send('Hello World!');
});
app.get('/v1/app-name', (req, res) => {
    console.log("Sample-node-app");
    fs.appendFileSync(logFilePath, "Sample-node-app\n");
    res.send('Sample-node-app');
});
app.get('/v1/generate-error-log', (req, res) => {
  console.log("generate error log");
  fs.appendFileSync(logFilePath, "ERROR: Some error happened on server\n");
  res.send('Error generated');
});
app.get('/health', (req, res) => {
    res.send('I am healthy, thanks!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
