const promise = require('bluebird');
const options = {
  // Initialization Options
  promiseLib: promise
}
const pgp = require('pg-promise')(options)
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/contacts'
const db =  pgp(connectionString)




// const getContacts = function(callback){
//   query(`SELECT * FROM contacts ORDER BY contacts.name`, [], callback)
// }
// const getContactDetails = function(callback){
//   query(`SELECT * FROM contacts WHERE contacts.id = ${contactId}`, [], callback)
// }
// const createNewContact = function(callback){
//   console.log(name, email, phone, street, city, state, country, zip, birthday, website);
//   //  query(`insert into contacts (name, email, phone, street, city, state, country, zip, birthday, website) values (${name}, ${email}, ${phone}, ${street}, ${city}, ${state}, ${country}, ${zip}, ${birthday}, ${website});`, [], callback)
// }


/**
 * Queries
 */

function getContacts (req, res, next) {
  db.any('SELECT * FROM contacts ORDER BY contacts.name')
  .then(function (contacts) {
    res.render('index', { title: 'Contacts', contacts: contacts})
  })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getContacts,
  // getContactDetails,
  // createNewContact
}