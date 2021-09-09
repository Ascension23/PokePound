const { AuthenticationError } = require('apollo-server-express');
const { User, Pokemon, Adoption } = require('../models');
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
    // adoptions: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Adoption.find(params).sort({ createdAt: -1 });
    // },
    adoptions: async () => {
      return Adoption.find({}).sort({ createdAt: -1 }).populate('pokemon');
    },
    adoption: async (parent, { adoptionId }) => {
      return Adoption.findOne({ _id: adoptionId }).populate('pokemon');
    },
    // pokemons: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return await Pokemon.find(params).sort({ createdAt: -1 });
    // },
    pokemons: async () => {
      // const params = username ? { username } : {};
      return Pokemon.find({}).sort({ createdAt: -1 });
    },
    pokemon: async (parent, { pokemonId }) => {
      // return await Pokemon.findOne({ _id: pokemonId }).populate('adoption');
      return Pokemon.findOne({ _id: pokemonId });
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
    // adding adoption
    addAdoption: async (parent, { name, description, pokemon }, context) => {
      if (context.user) {
        const adoption = await Adoption.create({
          name,
          description,
          pokemon,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { adoptions: adoption._id } }
        );

        return adoption;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { adoptionId, commentText }, context) => {
      if (context.user) {
        return Adoption.findOneAndUpdate(
          { _id: adoptionId },
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
    
  },
};

module.exports = resolvers;
