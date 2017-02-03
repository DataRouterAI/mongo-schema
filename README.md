# DataRouter Mongo
Mongoose Schemas used within DataRouter exported as a single module.

# Usage
Mongoose models must be created on the proper mongoose instance.
Therefore, this module only exports the schemas. It's left to you
to compile these schemas as mongoose models.

### Native Node.js
```javascript
const mongoose = require('mongoose');
const { UserSchema, ApplicationSchema } = require('@datarouterai/mongo-schema');
const User = mongoose.model('User', UserSchema, 'users');

const user = new User();
user.save();
```

## ES6 (Babel)
```javascript
import mongoose from 'mongoose';
import { UserSchema, ApplicationSchema } from '@datarouterai/mongo-schema';

const User = mongoose.model('User', UserSchema, 'users');

const user = new User();
user.save();

```
