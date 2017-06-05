const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    provider: { type: String },
    category: { type: String, required: true },     // ipsec, redshift, mssql
    connectionPrototype: mongoose.Schema.Types.Mixed,
}, schemaOptions);

module.exports = schema;
