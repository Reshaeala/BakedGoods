const express = require('express');
const router = express.Router();
const BakeStuff = require('../models/bakingsupply.js');


//THIS BELONGS TO MY EDIT PAGE
router.put('/:id' , (req, res) => {
  console.log(req.body);
  BakeStuff.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, update) => {
    res.redirect('/baking')
  })
})

router.get('/:id/edit', (req, res) => {
  BakeStuff.findById(req.params.id, (err, foundStuff) => {
    res.render(
      'edit.ejs',
      {
        stuff: foundStuff,

      }
    )
  })
})

//////////////////////////////////////////////////////////////////////////////

//THIS DELETES
router.delete('/:id', (req, res) => {
  BakeStuff.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/baking');
  })
})


///////////////////////////////////////////////////////////////////////////////

//THIS IS FOR THE NEW PAGE
router.post('/', (req, res) => {
  console.log(req.body);
  BakeStuff.create(req.body, (err, newStuff) => {
    // console.log(err);
    // console.log(newStuff);
    res.redirect('/baking')
  })
})


router.get('/new', (req, res) => {
  res.render('new.ejs');
})

///////////////////////////////////////////////////////////////////////////////

//THIS IS FOR THE SHOW PAGE
router.get('/:id', (req, res) => {
  // console.log(req.params.id);
  BakeStuff.findById(req.params.id, (err, foundStuff) => {
    res.render('show.ejs', {
      stuff: foundStuff

    })

  })
})

//THIS IS FOR THE BUY BUTTON
router.put('/:id/buy', (req, res) => {
  BakeStuff.findByIdAndUpdate(req.params.id, {$inc: {qty:-1}}, (err, updatedModel) => {
    res.redirect(`/baking/${req.params.id}`)
  })
})
// //////////////////////////////////////////////////////////////////////////////
//THIS IS FOR THE INDEX PAGE
router.get('/', (req, res) => {
  BakeStuff.find({}, (err,allStuff ) => {
    res.render('index.ejs',
    {
      stuff: allStuff
    })
  })
})


module.exports = router
