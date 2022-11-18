const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const port = process.env.PORT;
const client = path.resolve(__dirname, '../client/dist');

// console.log('client: ', client);

app.use(express.static(client));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})