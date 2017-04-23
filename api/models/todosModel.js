'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodosSchema = new Schema({
	title: {
		type: String,
		Required: 'Title is a mandatory field'
	},
	description: {
		type: String
	},
	userName: {
		type: String
	},
	timeStamp: {
		type: Date,
		default: Date.now
	}
}, { collection: 'todos' });

module.exports = mongoose.model('Todos', TodosSchema);