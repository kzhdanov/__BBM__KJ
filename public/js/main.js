var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');
let Bb = require('backbone');
let AppCollection = require('./Collections/app');
let userView = require('./Views/userItem');

var coll = new AppCollection();
    coll.fetch();

const MyCollectionView = Mn.CollectionView.extend({
  tagName: 'tbody',
  childView: userView,
  collection: coll,

  onChildviewDeleteItem(childView) {
    console.log('item selected: ' + childView.model.cid);
  }
});

const collectionView = new MyCollectionView();
collectionView.render();

$('#_root').append(collectionView.$el);
