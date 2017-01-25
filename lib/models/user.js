module.exports = function build(mongoose) {
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
        // TODO: is this the best auth schema
        services: {
            password: {
                bcrypt: String,
            },
        },
    }, schemaOptions);

    return mongoose.model('User', schema, 'users');
};
