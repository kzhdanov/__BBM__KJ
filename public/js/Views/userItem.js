var Mn = require('backbone.marionette');
var _ = require("underscore");

module.exports = Mn.View.extend({
  tagName: 'tr',
  template: '#item',

  events: {
    'click .js-editItem': 'edit',
    'click .js-delete': 'delete',
    'change #fn': 'fnChanged',
  },

  triggers: {
    'click .js-delete': 'delete:item',
  },

  onRender: function() {

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
  		this.model.save();
  	}
  },

  delete: function () {
    this.model.destroy();
  },

  fnChanged: function (e) {
    this.model.set('firstname', e.target.value); 
  }
});
