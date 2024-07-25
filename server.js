require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const clothingRoutes = require('./routes/clothing');
app.use('/clothing', clothingRoutes);

// db
require('./config/database');

const Clothing = require('./models/clothing');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
  res.render('index.ejs');
});

// new
app.get('/clothing/new', (req, res) => {
  res.render('clothing/new.ejs');
});

// create
app.post('/clothing', async (req, res) => {
  await Clothing.create(req.body);
  res.redirect('/clothing');
});

// display all
app.get('/clothing', async (req, res) => {
  const clothes = await Clothing.find();
  res.render('clothing/index.ejs', { clothes });
});

// display one
app.get('/clothing/:clothingId', async (req, res) => {
  const clothing = await Clothing.findById(req.params.clothingId);
  res.render('clothing/show.ejs', { clothing });
});

// delete
app.delete('/clothing/:clothingId', async (req, res) => {
  await Clothing.findByIdAndDelete(req.params.clothingId);
  res.redirect('/clothing');
});

// edit
app.get('/clothing/:clothingId/edit', async (req, res) => {
  const clothing = await Clothing.findById(req.params.clothingId);
  res.render('clothing/edit.ejs', { clothing });
});

// update
app.put('/clothing/:clothingId', async (req, res) => {
  await Clothing.findByIdAndUpdate(req.params.clothingId, req.body);
  res.redirect(`/clothing/${req.params.clothingId}`);
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
