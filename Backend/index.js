let conectedToMongoose=require('./db');
conectedToMongoose();
const express = require('express')
var cors = require('cors')
const app = express();
const port = 5000;
app.use(express.json());
 
app.use(cors())
// app.get('/', (req, res) => {
//   res.send('Hello Sobhandev pramanik')
// })
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

app.listen(port, () => {
  console.log(`InoteBook listening on port http://localhost:${port}`)
})