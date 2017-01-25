module.exports = function build(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        logo: String,
        name: String,
        aries: {
            code: String,
            types: [{
                type: String,
                enum: ['source', 'sink']
            }],
            configPrototype: mongoose.Schema.Types.Mixed,
            connectionPrototype: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
        },
        clickstream: {
            code: String,
            platforms: [{
                type: String,
                enum: ['analytics.js', 'server', 'analytics-ios', 'analytics-android']
            }],
            configPrototype: mongoose.Schema.Types.Mixed,
            connectionPrototype: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' }
        },
        webhooks: {
            code: String,
            nickname: String
        }
    }, schemaOptions);

    return mongoose.model('Provider', schema, 'providers');
};
