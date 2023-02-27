const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
   reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
   },
   username: {
    type: String,
    required: true,
   },
   createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal),
   },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const dateFormat = date => {
  return new Date(date).toDateString();
}

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;