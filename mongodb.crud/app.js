var GenericDao = require('./dao/generic-dao');
var databaseConfiguration = require('./db-config');


var genericDao = new GenericDao(databaseConfiguration);

var user = {
  name: 'konstantindenerz',
  firstName: 'Konstantin',
  lastName: 'Denerz'
};

genericDao.add(user);
