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
    batch: {
      hostname: String,
      connection: String,
      dagURI: String,
      dagRepo: String,
      monitoringURL: String,
      dashboardURL: String,
      apiKey: String
    },
    plan: mongoose.Schema.Types.Mixed,
    enabled: Boolean,
    deletedAt: Date
}, schemaOptions);

module.exports = schema;
