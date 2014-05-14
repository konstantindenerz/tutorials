var mongoClient = require('mongodb').MongoClient;


var GenericDao = function GenericDaoClass(){
	GenericDao.prototype.add = function addUser(user){
		mongoClient.connect("mongodb://localhost:27017/crud", function(error, db){
			var users = db.collection('users');
			users.insert(user, function(err, result){
				//TODO: Handle exceptions
			});
		});
	};
};


var genericDao = new GenericDao();

var user = {
	name: 'konstantindenerz',
	firstName: 'Konstantin',
	lastName: 'Denerz'
};

genericDao.add(user)

