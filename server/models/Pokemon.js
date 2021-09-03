const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const pokemonSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  type1: {
    type: String,
  },
  type2: {
    type: String,
  },
  level: {
    type: Number,
  },
  attack: {
    type: Number,
  },
  defense: {
    type: Number,
  },
  seed: {
    type: Number,
  },
  special: {
    type: Number,
  },
  gif: {
    type: String,
  },
  png: {
    type: String,
  },
  description: {
    type: String,
  },
  adoptions: {
    type: Schema.Types.ObjectId,
    ref: 'Adoption'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;
