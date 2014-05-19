var mongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
	extend = require('util')._extend;

/**
	Creates an instance of a generic data access object (DAO).
	@constructor
	@this {GenericDao}
	@param {Object} config
*/
var GenericDao = function GenericDaoClass(config, keyField){

	

	GenericDao.prototype.add = function add(object){

		mongoClient.connect(config.url, function(error, db){
			var collection = db.collection(config.collection);

			collection.insert(object, {w:1}, function(err, result){
				
				//TODO: Handle exceptions
				if(!err && result){
					console.log('added object ', result);
				}else{
					console.log('insertion failed: ', err);
				}
			});

		});

	};
	
	function buildCriteria(key, source){
		var result = {};
		result[key] = source[key];
		return result;
	}
	
	GenericDao.prototype.set = function set(source, changeset){
		var id = source[keyField];
		
		mongoClient.connect(config.url, function(error, db){
			var collection = db.collection(config.collection);
			var criteria = buildCriteria(keyField, source);
			collection.update(criteria, {$set:changeset}, {w:1}, function(err, result){
				//TODO: Handle exceptions
				if(!err && result === 1){
					console.log('updated object ', source);
				}else{
					console.log('update failed: ', err);
				}
				
			});

		});
		
	};
};

module.exports = GenericDao;
