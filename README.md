# Week 5 Assessment: Contacts App

Build a contacts manager web application with Express and PostgreSQL.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

Run `$ npm run` to see the list of commands available.

You will get errors when you start your server. You'll have to resolve these errors.

The app uses a basic Express file structure, and includes SQL files to set up the schema and import data.

```sh
contacts.sql        # basic import contacts data (just name)
contacts_full.sql   # full import of contacts data (all fields)
database.js         # database connection and queries
package.json        # npm standard
public/             # static assets go here
README.md           # you are here
schema.sql          # define database schema here
server.js           # web server
views/              # html templates go here
```
# General: Code Quality, Git Flow, Etc.

- [ ] Variables, functions, files, CSS classes, etc. have appropriate and meaningful names. 
- [ ] Avoid generic, vague or too-short names (e.g. string, stuff, x)
- [ ]  HTML, CSS, and JS files are well formatted with consistent spacing and indentation. 
- [ ] At the very least: tags in HTML and brackets in JavaScript are opened/closed on the same indent level; there are line breaks between style definitions in CSS and between function declarations in JavaScript.
- [ ]  Git commit history shows clear progression through different features, with concise and descriptive commit messages. 
- [ ] Commit messages should summarize what changes are being introduced.
- [ ]  There are at least two commits per day but ideally a lot more. 
- [ ] It’s OK to commit incomplete/draft code. The important thing is to keep a good pace of development and show how your code evolved toward your solution.
- [ ]  Your artifact (final project) uses the starter code.
- [ ]  Your artifact is published to a GitHub repository.

# Pages and Routes

- [ ] There are three different pages, each with their own route.

- [ ] The list of all contacts can be viewed at the root route, /.
- [ ] Individual contacts can be viewed in more detail at the route /contacts/:id, where :id is a contact record id from the database. 
For example, visiting the route /contacts/3 would show the contact with the database id 3.
- [ ] New contacts can be created by visiting the route /contacts/new and submitting the form.
# Database

- [ ] Update the database schema so that your app can store all the necessary information.
- [ ] Database table contacts has fields for contact name, email address, phone number, home address (separate fields for: street, city, state, country, and zip code), birthday, and personal website.
- [ ] Columns in database table use appropriate data types.
- [ ] Your app uses pg, pg-promise or knex to communicate with a postgres server.
- [ ] There are scripts defined to import contact data and load the schema:

- [ ] $ npm run schema loads the schema (schema.sql) into the database
- [ ] $ npm run import imports the data in contacts_full.sql into the database
User Stories

Users of the app have the ability to take the following actions:

# #Stage One: MVP

 - [ ] When a user is viewing the list page (/), they see all of their contacts.
 - [ ] On the list page, a user can see a list of all contacts’ names sorted alphabetically by first name.
 - [ ] When a user is viewing the list page (/), they can click on individual contacts to go to the corresponding detail page for the contact (/contacts/:id).
 - [ ] On the contact detail page, a user can see the contact’s name, email address, phone number, home address (including: street, city, state, country, and zip code), birthday, and personal website.
 - [ ] When a user is viewing the list page (/), they can click on a link to “Add Contact”, which takes them to the new contact page (/contacts/new).
 - [ ] When a user fills out and submits the new contact form at /contacts/new, they are redirected to the “detail” page for the new contact. 
For example, if a user creates a new contact “Ada Lovelace”, then after submitting the form they would be redirected to the contact page for Ada Lovelace (/contacts/<id>, where <id> is the record id from the database corresponding to the new contact).

# Stage Two: Fully-Featured

 - [ ] On the contact list page, a user can search for contacts by name.
 - [ ] When a user searches for a contact by name, all contacts whose name matches the search query are shown in a new /search page.
 - [ ] On the contact detail page, a user can see an embedded Google Map with the contact’s home address pre-loaded.
 - [ ] When a user clicks on the “Delete” button for a contact, that contact record is delete from the database and the user is redirected to the contact list page (/).
 - [ ] Users can delete a contact from either the contacts list page or contact detail page.

# User Interface

- [ ] The user interface matches the designs in the mockups.

- [ ]  The entire page content should be constrained by a centered page column.
- [ ]  The site header has a link to the homepage.
- [ ]  The site header has a link to the new contact page (/contacts/new).
- [ ]  The site header has a a text input that lets you fuzzy search for contacts.
- [ ]  The color of the header, link text, etc. are exactly the same as the colors in the mockups.
- [ ]  Background: #50E3C2 (teal)
- [ ]  Header, button: #4990E2 (blue)
- [ ]  Default text: #4A4A4A (dark grey)
- [ ]  Secondary text: #9B9B9B (light grey)
- [ ]  Link text: #002653 (dark blue)
- [ ]  Delete links: #D0011B (red)
- [ ]  The font across the whole site is monospace.
- [ ]  The base font-size of the site is 16px.
- [ ]  The List View (/) looks the same as in the mockup (except with different contact data).
- [ ]  The Detail View (/contacts/:id) looks the same as in the mockup (except with different contact data).
- [ ]  The New Contact View (/contacts/new) looks the same as in the mockup (except with different contact data).
- [ ]  The Search View (/search) looks the same as in the mockup (except with different contact data).

# Templating and Includes

- [ ] Use HTML templating to build your web pages and embed dynamic data.

- [ ] The server uses the EJS templating language to build HTML.
- [ ] Each route that renders HTML uses its own EJS template.
- [ ] Each page template shares the same layout. 
- [ ] The means the <head> is consistent across all paged and is not duplicated.
- [ ] Each page template shared the same nav bar. 
- [ ] Each page has the same nav bar but the code is not duplicated and each page template uses the same page header ejs template (eg: header.ejs).

# Browser Interactivity

- [ ] When clicking a link that will delete a contact, a confirmation prompt displays confirming the user wants to delete the contact. Contacts are only deleted if the user “confirms”.
- [ ] When a user attempts to submit the new contact form without a value in the name field, the form is not submitted and a form validation error is displayed at the top of the page in red.

## google maps API key
AIzaSyCkMczI6R7jtOt0aLT9YDpkLzPRiCPJswA
