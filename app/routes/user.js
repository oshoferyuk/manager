import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	model(){
		return this.get('store').findAll('user');
	}
});
