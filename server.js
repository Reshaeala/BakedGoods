const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')

///////////////////////////////////////////////////////////////////////////////
                            //MY MIDDLEWARE
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));
app.use(express.static('public'));
///////////////////////////////////////////////////////////////////////////////

const bakingController = require('./controllers/bakingroutes.js');

app.use('/baking', bakingController)
///////////////////////////////////////////////////////////////////////////////

app.listen(3002, () => {
  console.log('listening');
})

mongoose.connect('mongodb://localhost:27017/BakingGoods', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})
