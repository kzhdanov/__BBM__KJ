module.exports = function(pool) {
	var context = {
		get: function(callback) {
			pool.query('SELECT * FROM `Users`', callback);
		}
	};

	return context;
};
