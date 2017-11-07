const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

schemaOptions.timestamps = true;
schemaOptions._id = false;

const Resource = {
    cpu: { type: Number, min: 0 },
    memory: { type: Number, min: 0 },
};

const schema = new mongoose.Schema({
    level: { type: String, enum: ['connect', 'pro'] },
    resources: {
        maxActiveRuns: { type: String },
        taskCount: { type: String },
        parallelism: { type: String },
        dedicated: { type: Boolean, default: false },
        task: Resource,
        webserver: Resource,
        scheduler: Resource,
    },
}, schemaOptions);

module.exports = schema;
