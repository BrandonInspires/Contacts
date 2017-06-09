const pg = require('pg')
const server = require('./server')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/contacts'
const client = new pg.Client(connectionString)
client.connect()

const query = function(sql, variables, callback){
  console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)

  client.query(sql, variables, function(error, result){
    if (error){
      console.log('QUERY <- !!ERROR!!')
      console.error(error)
      callback(error)
    }else{
      console.log('QUERY <-', JSON.stringify(result.rows))
      callback(error, result.rows)
    }
  })
}

const getContacts = function(callback){
  query(`SELECT * FROM contacts ORDER BY contacts.name`, [], callback)
}
const getContactDetails = function(callback){
  query(`SELECT * FROM contacts WHERE contacts.id = ${contactId}`, [], callback)
}
const createNewContact = function(callback){
  console.log(name, email, phone, street, city, state, country, zip, birthday, website);
  //  query(`insert into contacts (name, email, phone, street, city, state, country, zip, birthday, website) values (${name}, ${email}, ${phone}, ${street}, ${city}, ${state}, ${country}, ${zip}, ${birthday}, ${website});`, [], callback)
}

module.exports = {
  getContacts,
  getContactDetails,
  createNewContact
}
