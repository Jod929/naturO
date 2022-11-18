const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const client = path.resolve(__dirname, '../client/dist');

require('dotenv').config()


app.use(express.static(client));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})