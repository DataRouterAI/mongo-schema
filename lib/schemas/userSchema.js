const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    emails: [{
        verified: Boolean,
        address: String,
    }],
    services: {
        password: {
            bcrypt: String,
        },
        locked: Boolean,
    },
    profile: {
      firstName: String,
      lastName: String,
      image: String,
      company: String,
      referrals: [ String ],
      v1: String,
      policy: {
        terms: Number,
        privacy: Number
      },
      lastLogin: Date
    },
    superAdmin: Boolean,
    status: {
        type: String,
        enum: ['inactive', 'active', 'pending', 'locked'],
    },
    username: { type: String, unique: true },
    deletedAt: Date
}, schemaOptions);

module.exports = schema;
