var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET New Contact Page. */
router.get('/contacts/new', function(req, res, next) {
  res.render('new', { title: 'New Contacts' });
});
/* GET Contact Details. */
router.get('/contacts/:id', function(req, res, next) {
  res.render('details', { title: 'Contact Details' });
});


module.exports = router;
