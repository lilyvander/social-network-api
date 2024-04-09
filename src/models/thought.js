const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  thoughtBody: {
    type: String,
    required: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
 username: {
    type: String,
    required: true,
  }  
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

module.exports = thoughtSchema;
