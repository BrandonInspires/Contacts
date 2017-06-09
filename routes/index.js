var express = require('express');
var router = express.Router();
var db = require('../database');

/**
 * get All Contacts
 */
router.get('/', db.getContacts);

router.get('/contacts', db.getContacts);

/**
 * GET Add Contact Form
 */
router.get('/contacts/new', function(req, res, next) {
  res.render('new', { title: 'New Contacts' });
});
/**
 * Add New Contact via Form POST
 */
router.post('/contacts/new', db.addNewContact);

/* GET Contact Details. */
router.get('/contacts/:id', db.getContactDetails);


module.exports = router;
