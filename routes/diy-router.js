const express = require('express');

const router = express.Router();

// const myUploader = multer(
//   {
//     dest: __dirname + '/../public/uploads/'
//   }
// );
//
router.get('/create-a-diy', (req, res, next) => {
  res.render('diy-views/diy-form.ejs');
});

router.post(
  '/diys',
  myUploader.single('')
  (req, res, next) => {

});



module.exports = router;
