const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome Screen'))

// GET the DATA
app.get('/memos/:year/:month/:date', (req, res) => {
  res.send("get data filterd by year date and month")
})

// GET the full JSON
app.get('/json/:userID', (req, res) => {
  res.send('GET the whole data json')
})

// Store Items in DB
app.post('/addmemo/:userID', function (req, res) {
  res.send('POST request to the homepage')
})

// Delete Item in DB
app.delete('/deletememo/:userID', function(req, res) {
  const { id } = req.params;
  res.send(`Delete record with id ${id}`);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
