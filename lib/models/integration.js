module.exports = function create(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        appId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
        enabled: Boolean,
        integration: String,
        config: mongoose.Schema.Types.Mixed,
        connection: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
        name: String,
    }, schemaOptions);

    return mongoose.model('Integration', schema, 'integrations');
};
