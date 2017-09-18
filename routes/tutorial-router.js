const express = require('express');

const router = express.Router();

// const myUploader = multer(
//   {
//     dest: __dirname + '/../public/uploads/'
//   }
// );
//
// router.get('/create-a-diy', (req, res, next) => {
//   res.render('diy-views/create.ejs');
// });
//
// router.post(
//   '/process-diy',
//   myUploader.single('diyPhoto'),
//   (req, res, next) => {
//   const theDIY = new TutorialModel({
//     name: dsf,
//   });
//   theDIY.save((err) => {
//     if(err){
//       next(err);
//       return;
//     }
//     res.render('/');
//   });
// });
//
//




module.exports = router;
