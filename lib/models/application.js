const mongoose = require('mongoose');

module.exports = function create(modelFn) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        name: { type: String, required: true },
        platform: { type: String, required: true },
    }, schemaOptions);

    return modelFn('Application', schema, 'applications');
};
