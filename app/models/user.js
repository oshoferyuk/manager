import DS from 'ember-data';

const { Model, attr } = DS;

export default DS.Model.extend({
	name: attr('string'),
    phone: attr('string'),
    username: attr('string')
});
