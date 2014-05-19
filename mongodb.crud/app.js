var GenericDao = require('./dao/generic-dao');
var databaseConfiguration = require('./db-config');


var genericDao = new GenericDao(databaseConfiguration, "name"); // name is the key

var user = {
  name: 'konstantindenerz', // Key
  firstName: 'Konstantin',
  lastName: 'Denerz'
};

// Create a new user
genericDao.add(user);


// Update the user
genericDao.set(user, {power: 42});
