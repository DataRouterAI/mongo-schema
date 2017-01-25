const assert = require('chai').assert;
const Mongoose = require('mongoose').Mongoose;
const mockgoose = require('mockgoose');
const mongoose = new Mongoose();
const models = require('../lib/')(mongoose);

describe('buildSchema', function () {
    before(function (done) {
        mockgoose(mongoose).then(function () {
            mongoose.connect('mongodb://mongo/test');
            mongoose.connection.once('open', done);
            mongoose.connection.once("error", done);
        });
    });

    it('creates schemas on given connection', function () {
        Object.keys(models).forEach(key => {
            assert(models[key].db === mongoose.connection, 'Models should be created on the given mongoose connection');
        });
    });
});
