const mongoose = require('mongoose');
const userSchema = require('./db.schema');

const User = mongoose.model('User', userSchema);

module.exports = User;