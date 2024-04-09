const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const userSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  username: {
    type: String,
    required: true,
    maxlength: 50
  },
  createdAt: {
    type: Date,
    default: Date.now,  
  },
  thought: {
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }, 
  reaction: {
    type: Schema.Types.ObjectId,
    ref: 'Reaction'
  }
   
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const User = mongoose.model('User', userSchema);

module.exports = User
