var { Collection } =  require('backbone');
var appModel = require('../Models/app');

module.exports = Collection.extend({
  url : '/get',
  model: appModel,
});
