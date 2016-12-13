module.exports = function(pool) {
	var context = {
		get: function(callback) {
			pool.query('SELECT * FROM `Users`', callback);
		},
		save: function(data, callback) {
			pool.query('UPDATE `Users` SET ? where id = ?', [data, data.id], callback);
		}
	};

	return context;
};
