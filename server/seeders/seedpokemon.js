const db = require('../config/connection');
const { User, Pokemon, Adoption } = require('../models');

const userData = require('./userSeeds.json');
const adoptionData = require('./adoptionSeeds.json');
const pokemonData = require('./pokemonSeeds.json');

db.once('open', async () => {
  
  // clean database
  await User.deleteMany({});
  await Adoption.deleteMany({});
  await Pokemon.deleteMany({});
  // bulk create each model
  const users = await User.insertMany(userData);
  const adoptions = await Adoption.insertMany(adoptionData);
  const pokemons = await Pokemon.insertMany(pokemonData);

  for (newAdoption of adoptions) {

    // randomly add each adoption to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.adoptions.push(newAdoption._id);
    await tempUser.save();

    // randomly add a pokemon to each adoption
    const tempPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    newAdoption.pokemon = tempPokemon._id;
    await newAdoption.save();

    // reference adoption on pokemon model, too
    // tempPokemon.adoptions.push(newAdoption._id);
    // await tempPokemon.save();
  }  

  console.log('all done!');
  process.exit(0);
});