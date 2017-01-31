# DataRouter Mongo
Mongoose models used within DataRouter exported as a single module.

# Usage
Mongoose models must be created on the proper mongoose instance.
Therefore, this module exports a single named function (`createModels`) that
accepts a mongoose instance. Models are then built and returned on a single
object.

### Native Node.js
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/test');
const Models = require('@astronomerio/datarouter-mongo')(mongoose.connection.model.bind(mongoose.connection)));

const user = new Models.User();
user.save();
```

## ES6 (Babel)
```javascript
import mongoose from 'mongoose';
mongoose.connect('mongodb://mongo/test');
import createModels from '@astronomerio/datarouter-mongo';
const { User, Application } = createModels(mongoose.connection.model.bind(mongoose.connection)));

```
