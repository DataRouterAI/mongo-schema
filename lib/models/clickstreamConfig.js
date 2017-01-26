const createActivitySchema = require('../schemas/activity');

module.exports = function create(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const ActivitySchema = createActivitySchema(mongoose);

    const schema = new mongoose.Schema({
        name: { type: String, required: true },
        code: { type: String, required: true },
        application: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
        connection: { type: mongoose.Schema.Types.ObjectId, ref: 'ConnectionConfig' },
        config: mongoose.Schema.Types.Mixed,
        enabled: Boolean,
        activityList: [ActivitySchema]
    }, schemaOptions);

    return mongoose.model('ClickstreamConfig', schema, 'clickstreamConfigs');
};
