const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    platform: { type: String, required: true },
    deletedAt: Date,
    version: { type: Number, min: 0 },
    demo: Boolean,
    filter: {
        track: { type: mongoose.Schema.Types.Mixed, required: false },
        identify: { type: mongoose.Schema.Types.Mixed, required: false },
        group: { type: mongoose.Schema.Types.Mixed, required: false },
        page: { type: mongoose.Schema.Types.Mixed, required: false }
    },
}, schemaOptions);

module.exports = schema;
