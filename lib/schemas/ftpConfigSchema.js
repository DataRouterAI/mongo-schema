const mongoose = require('mongoose');
const ActivitySchema = require('./activitySchema');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    schedule: { type: String, required: true },
    application: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
    path: { type: String, required: true },
    pokeInterval: Number,
    timeout: Number,
    enabled: Boolean,
    activityList: [ActivitySchema],
}, schemaOptions);

module.exports = schema;
