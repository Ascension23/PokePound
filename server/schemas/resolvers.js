const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Pokemon, Adoption } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate({
        path: 'adoptions',
        populate: 'pokemon'
      });
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate({
        path: 'adoptions',
        populate: 'pokemon'
      });
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    adoptions: async () => {
      return await Adoption.find({}).populate('pokemon');
    },
    adoption: async (parent, { adoptionId }) => {
      return await Adoption.findOne({ _id: adoptionId }).populate('pokemon');
    },

    pokemons: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Pokemon.find(params).sort({ createdAt: -1 });
    },
    pokemon: async (parent, { pokemonId }) => {
      // return await Pokemon.findOne({ _id: pokemonId }).populate('adoption');
      return await Pokemon.findOne({ _id: pokemonId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('adoptions');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // adding adoption
    addAdoption: async (parent, { name, level, attack, defense, description, pokemon }, context) => {
      if (context.user) {
        const adoption = await Adoption.create({
          name,
          level,
          attack,
          defense,
          description,
          pokemon,
          // need to figure this out . . .
          // pokemon: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { adoptions: adoption._id } }
        );

        return adoption;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
