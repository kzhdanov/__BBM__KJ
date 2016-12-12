var Mn = require('backbone.marionette');
var _ = require("underscore");

module.exports = Mn.View.extend({
  tagName: 'td',
  template: '#item',

  events: {
    'click .js-editItem': 'edit',
  },

  isEditing: false,

  edit: function () {
  	if (!this.isEditing) {
  		_.map(this.$('input'), function (el, i) {
  			el.removeAttribute('disabled');
  		});
		this.isEditing = true;
		this.$('.js-editItem').text('Save')
  	} else {
  		_.map(this.$('input'), function (el, i) {
  			el.setAttribute('disabled', true);
  		});
		this.isEditing = false;
		this.$('.js-editItem').text('Edit');
  	}

  },

});
