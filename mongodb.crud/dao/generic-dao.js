var mongoClient = require('mongodb').MongoClient;

/**
	Creates an instance of a generic data access object (DAO).
	@constructor
	@this {GenericDao}
	@param {Object} config
*/
var GenericDao = function GenericDaoClass(config){

	GenericDao.prototype.add = function addUser(object){

		mongoClient.connect(config.url, function(error, db){
			var collection = db.collection(config.collection);

			collection.insert(object, function(err, result){
				//TODO: Handle exceptions
			});

		});

	};
};

module.exports = GenericDao;
