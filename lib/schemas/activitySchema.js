const mongoose = require('mongoose');
// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    version: { type: String, required: true },
    config: mongoose.Schema.Types.Mixed,
    connection: { type: mongoose.Schema.Types.ObjectId, ref: 'ConnectionConfig' },
    dependsOn: [mongoose.Schema.Types.ObjectId],
}, schemaOptions);

module.exports = schema;
