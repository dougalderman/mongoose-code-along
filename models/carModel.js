var mongoose = require('mongoose');

// One to One - Driver has car

var CarSchema = mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number}
});

var Driver = mongoose.Schema({
    name: {type: String},
    age: {type: String},
    license: {type: Number},
    primaryCar: CarSchema  // nested schema
});


/* Example of above Driver stored in database
{
    name: 'Elon Musk',
    age: 44,
    license: 5,
    primaryCar: 
    {
        make: 'Tesla',
        model: 5,
        year: 2016
    }
}
*/

// One to One - Car has Driver

var DriverSchema = mongoose.Schema({
    name: {type: String},
    age: {type: String},
    license: {type: Number}
});

var CarSchema = mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number},
    driver: DriverSchema
});



// One to Many - Driver has cars

var CarSchema = mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number}
});

var Driver = mongoose.Schema({
    name: {type: String},
    age: {type: String},
    license: {type: Number},
    cars: [CarSchema] 
});



// One to Many - Car has drivers

var DriverSchema = mongoose.Schema({
    name: {type: String},
    age: {type: String},
    license: {type: Number}
});

var CarSchema = mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number},
    drivers: [DriverSchema]
});

module.exports = mongoose.model('car', CarSchema)

/*
{
    name: "Elon Musk",
    age: 44,
    license: 5,
    cars: [{
        make: Tesla,
        model: X,
        year: 2016
    },
    {
        make: Tesla,
        model: S,
        year: 2015
    },{
        make: Tesla,
        model: S,
        year: 2014
    }]
}
*/



// Many to Many - Drivers have cars


var DriverSchema = mongoose.Schema({
    name: {type: String},
    age: {type: String},
    license: {type: Number},
    cars: [
        type: { mongoose.Schema.Types.ObjectId, ref:'car'}
    ]
});

module.exports = mongoose.model('car', CarSchema);
module.exports = mongoose.model('driver', DriverSchema);


// Usually the following goes in another file, usually a controller.

Driver.find()
    .where('name').equals('Annie')
    .and().where('age').lessThan(18)
    .exec()
    .then(function(result){})

// Alternative way to do this query:
Driver.find({name: 'Annie'}, function(err, result){})

Driver.find()
    .Criteria()
    .sort()
    .limit()
    .exec()
    .then()
    
Driver.find()
    .where('name').equals('Annie')
    .populate('cars')
    .exec()
    .then()

/* returns :

// WITHOUT POPULATE:
{
_id: ObjectId("4"),
age: 16,
name: 'Annie',
license: '555'
cars: [
    {_id: ObjectId('2')},
    {_id: ObjectId('4')}
]}


//WITH POPULATE:
{
_id: ObjectId("4"),
age: 16,
name: 'Annie',
license: '555'
cars: [
    {_id: ObjectId('2'), year: 1975, make: 'Honda', model: 'RiceRocket'},
    {_id: ObjectId('4'), year: 2010, make: 'Tesla', model: 'Car'}
]}
*/

/* FILLING MANY TO MANY RELATIONSHIPS

1) ADD YOUR DRIVER
2) ADD YOUR CARS SEPARATELY
3) GET YOUR CAR ID's
4) MANUALLY ADD THOSE IDS TO THE CARS COLLECTION ON DRIVER (USE $PUSH)

Most commonly done on reviews and comments. */