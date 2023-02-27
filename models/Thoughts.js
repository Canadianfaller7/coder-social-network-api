const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
  {
    thoughText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtTime) => dateFormat(createdAtTime),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const dateFormat = (createdAtTime) => {
  return new Date(createdAtTime).toDateString();
}

const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;
