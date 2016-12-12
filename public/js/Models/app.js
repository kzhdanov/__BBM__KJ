var { Model } =  require('backbone');

module.exports = Model.extend({
  defaults: {
  	firstname: '',
  },
    
  foo: function () {
  	console.log(1);
  }
});
