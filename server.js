const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Patient gets reminder from Doctor
app.get('/patient', (req, res) => {
  const items = itemController.getAllItemsDoctor();
  res.send(items[items.length - 1])
});


// Doctor gets update from Patient
app.get('/doctor', (req, res) => {
    const items = itemController.getAllItemsPatient();
    res.send(items[items.length - 1])
  });

// Doctor makes a reminder
app.post('/doctor', (req, res) => {
    const newItem = req.body.message;
    res.send("Reminder delivered!")
    itemController.addMessageDoctor(newItem);
});

// Patient makes an update
app.post('/patient', (req, res) => {
    const newItem = req.body.message;
    res.send("Update delivered!")
    itemController.addMessagePatient(newItem);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
