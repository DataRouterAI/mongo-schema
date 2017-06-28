const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    name: String,
    connectionPrototype: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
    category: String,
    details: mongoose.Schema.Types.Mixed, // _encrypted=true|false
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    vpnConnection: { type: mongoose.Schema.Types.ObjectId, ref: 'ConnectionConfig' }, // a vpnConnection is also a ConnectionConfig
    deletedAt: Date
}, schemaOptions);

module.exports = schema;
