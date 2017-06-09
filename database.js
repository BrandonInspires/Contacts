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
function addNewContact (req, res, next) {
  console.log(req.body.name)
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const zip = req.body.zip;
  const birthday = req.body.birthday;
  const website = req.body.website;

  db.none("INSERT INTO contacts (name, email, phone, street, city, state, country, zip, birthday, website) VALUES (${ name }, ${ email }, ${ phone }, ${ street }, ${ city }, ${ state }, ${ country }, ${ zip }, ${ birthday }, ${ website })", req.body)
  db.any('SELECT * FROM contacts ORDER BY Id DESC LIMIT 1')
  .then(function (contacts) {
    res.render('details', { title: 'Contacts', contacts: contacts})
  })
    .catch(function (err) {
      return next(err);
    });
}
function getContactDetails (req, res, next) {
  db.any('SELECT contacts.name, contacts.email, contacts.phone, contacts.street, contacts.city, contacts.state, contacts.zip, contacts.country, contacts.website, extract(day from contacts.birthday::date) as the_day, extract(month from contacts.birthday::date) as the_month, extract(year from contacts.birthday::date) as the_year FROM contacts WHERE contacts.id = $1', parseInt(req.params.id))
  .then(function (contacts) {
    res.render('details', { title: contacts.id, contacts: contacts})
  })
    .catch(function (err) {
      return next(err);
    });
}
// function addNewContact (req, res, next) {
//   db.any('SELECT * FROM contacts ORDER BY contacts.name')
//   .then(function (contacts) {
//     res.render('new', { title: 'Contacts', contacts: contacts})
//   })
//     .catch(function (err) {
//       return next(err);
//     });



module.exports = {
  getContacts,
  getContactDetails,
  addNewContact,
}