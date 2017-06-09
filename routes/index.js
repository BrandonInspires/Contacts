var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', db.getContacts);
/* GET home page. */
router.get('/contacts', db.getContacts);

/* GET New Contact Page. */
router.get('/contacts/new', db.getContacts, function(req, res, next) {
  res.render('new', { title: 'New Contacts' });
});
/* GET Contact Details. */
router.get('/contacts/:id', function(req, res, next) {
  res.render('details', { title: 'Contact Details' });
});


module.exports = router;
