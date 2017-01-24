module.exports = function create(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        name: String,
        applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        owners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        alive: Boolean,
    }, schemaOptions);

    return mongoose.model('Organization', schema, 'organizations');
};
