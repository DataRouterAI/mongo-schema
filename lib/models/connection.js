module.exports = function create(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        name: String,
        credentials: mongoose.Schema.Types.Mixed,
        integration: String,
        organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    }, schemaOptions);

    return mongoose.model('Connection', schema, 'connections');
};
