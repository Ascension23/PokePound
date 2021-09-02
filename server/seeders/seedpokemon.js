const db = require('../config/connection');
const { User, Pokemon, Adoption } = require('../models');

const userData = require('./userSeeds.json');
const adoptionData = require('./adoptionSeeds.json');
const pokemonData = require('./pokemonSeeds.json');

// db.once('open', async () => {
//   try {
//     // clean database
//     await Pokemon.deleteMany({});
//     await User.deleteMany({});

//     // bulk create each model
//     const users = await User.insertMany(userData);
//     const pokemons = await Pokemon.insertMany(pokemonData);

//     for (newPokemon of pokemons) {
  
//       // randomly add a user to each pokemon
//       const tempUser = users[Math.floor(Math.random() * users.length)];
//       newPokemon.user = tempUser._id;
//       await newPokemon.save();
  
//       // reference pokemon on user model, too
//       tempUser.pokemons.push(newPokemon._id);
//       await tempUser.save();
//     }

//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });

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