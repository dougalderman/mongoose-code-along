var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
    expirationDate: {type: 'Date'},
    amount: {type: 'Number'},
    name: {type: 'String'},
    cost: {type: 'Number'},
    vendor: {type: 'String'},
    qtyPerOrder: {type: 'Number'}
});

module.exports = mongoose.model('Ingredient', ingredientSchema);