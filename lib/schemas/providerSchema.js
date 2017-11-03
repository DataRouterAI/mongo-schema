const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    branding: mongoose.Schema.Types.Mixed,
    workflows: {
        types: [{
            type: String,
            enum: ['source', 'sink'],
        }],
        configPrototype: mongoose.Schema.Types.Mixed,
        connectionPrototype: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
    },
    clickstream: {
        platforms: [{
            type: String,
            enum: ['analytics.js', 'server', 'analytics-ios', 'analytics-android'],
        }],
        compatibility: [{
            type: String,
            enum: ['analytics.js', 'server', 'analytics-ios', 'analytics-android'],
        }],
        configSchema: mongoose.Schema.Types.Mixed,
        configPrototype: mongoose.Schema.Types.Mixed,
        connectionPrototype: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
    },
    webhooks: {
        nickname: String,
        configPrototype: mongoose.Schema.Types.Mixed,
    },
}, schemaOptions);

module.exports = schema;
