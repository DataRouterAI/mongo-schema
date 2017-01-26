module.exports = function create(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        // ipsec, redshift, mssql
        code: { type: String, required: true },
        connectionPrototype: mongoose.Schema.Types.Mixed,
    }, schemaOptions);

    return mongoose.model('Connection', schema, 'connections');
};
