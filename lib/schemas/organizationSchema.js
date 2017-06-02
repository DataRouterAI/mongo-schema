const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    applications: [{ type: mongoose.Schema.Types.String, ref: 'Application' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    owners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    plan: {
        type: String,
        enum: ['free', 'basic', 'premium', 'enterprise'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'delinquent'],
    },
}, schemaOptions);

module.exports = schema;
