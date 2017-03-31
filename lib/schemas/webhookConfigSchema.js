const mongoose = require('mongoose');
const ActivitySchema = require('./activitySchema');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    application: { type: mongoose.Schema.Types.String, ref: 'Application' },
    enabled: Boolean,
    activityList: [ActivitySchema],
}, schemaOptions);

module.exports = schema;
