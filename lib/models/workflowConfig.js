const createActivitySchema = require('../schemas/activity');

module.exports = function build(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const ActivitySchema = createActivitySchema(mongoose);

    const schema = new mongoose.Schema({
        name: String,
        schedule: String,
        activityList: [ActivitySchema]
    }, schemaOptions);

    return mongoose.model('WorkflowConfig', schema, 'workflowConfigs');
};
