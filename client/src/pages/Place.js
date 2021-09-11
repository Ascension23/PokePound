import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Select } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_ADOPTION } from '../utils/mutations';
// import Auth from '../utils/auth';

const Place = () => {

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    pokemon: '',
  });

  const [addAdoption, { error, data }] = useMutation(ADD_ADOPTION);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addAdoption({
        variables: { ...formState },
      });
      // Auth.getToken(data.addAdoption.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-10 col-lg-8">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Place Your Pokémon up For Adoption</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may see your adoption{' '}
                <Link to="/adopt">on the adoption page.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Name . . ." value={formState.name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" name="description" placeholder="Description . . ." value={formState.description} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDropDown">
                  <Form.Label>Select the Pokémon</Form.Label>
                  <Form.Control as="select" name="pokemon" value={formState.pokemon} onChange={handleChange} style={{ overflowY: 'auto' }} >
                    <option value="">Select the Pokémon . . .</option> 
                    <option value="6136c48286d3859d5d273f5e">Bulbasaur</option>
                    <option value="6136c48286d3859d5d273f5f">Ivysaur</option>
                    <option value="6136c48286d3859d5d273f60">Venusaur</option>
                    <option value="6136c48286d3859d5d273f61">Charmander</option>
                    <option value="6136c48286d3859d5d273f62">Charmeleon</option>
                    <option value="6136c48286d3859d5d273f63">Charizard</option>
                    <option value="6136c48286d3859d5d273f64">Squirtle</option>
                    <option value="6136c48286d3859d5d273f65">Wartortle</option>
                    <option value="6136c48286d3859d5d273f66">Blastoise</option>
                    <option value="6136c48286d3859d5d273f67">Caterpie</option>
                    <option value="6136c48286d3859d5d273f68">Metapod</option>
                    <option value="6136c48286d3859d5d273f69">Butterfree</option>
                    <option value="6136c48286d3859d5d273f6a">Weedle</option>
                    <option value="6136c48286d3859d5d273f6b">Kakuna</option>
                    <option value="6136c48286d3859d5d273f6c">Beedrill</option>
                    <option value="6136c48286d3859d5d273f6d">Pidgey</option>
                    <option value="6136c48286d3859d5d273f6e">Pidgeotto</option>
                    <option value="6136c48286d3859d5d273f6f">Pidgeot</option>
                    <option value="6136c48286d3859d5d273f70">Rattata</option>
                    <option value="6136c48286d3859d5d273f71">Raticate</option>
                    <option value="6136c48286d3859d5d273f72">Spearow</option>
                    <option value="6136c48286d3859d5d273f73">Fearow</option>
                    <option value="6136c48286d3859d5d273f74">Ekans</option>
                    <option value="6136c48286d3859d5d273f75">Arbok</option>
                    <option value="6136c48286d3859d5d273f76">Pikachu</option>
                    <option value="6136c48286d3859d5d273f77">Raichu</option>
                    <option value="6136c48286d3859d5d273f78">Sandshrew</option>
                    <option value="6136c48286d3859d5d273f79">Sandslash</option>
                    <option value="6136c48286d3859d5d273f7a">NidoranF</option>
                    <option value="6136c48286d3859d5d273f7b">Nidorina</option>
                    <option value="6136c48286d3859d5d273f7c">Nidoqueen</option>
                    <option value="6136c48286d3859d5d273f7d">NidoranM</option>
                    <option value="6136c48286d3859d5d273f7e">Nidorino</option>
                    <option value="6136c48286d3859d5d273f7f">Nidoking</option>
                    <option value="6136c48286d3859d5d273f80">Clefairy</option>
                    <option value="6136c48286d3859d5d273f81">Clefable</option>
                    <option value="6136c48286d3859d5d273f82">Vulpix</option>
                    <option value="6136c48286d3859d5d273f83">Ninetales</option>
                    <option value="6136c48286d3859d5d273f84">Jigglypuff</option>
                    <option value="6136c48286d3859d5d273f85">Wigglytuff</option>
                    <option value="6136c48286d3859d5d273f86">Zubat</option>
                    <option value="6136c48286d3859d5d273f87">Golbat</option>
                    <option value="6136c48286d3859d5d273f88">Oddish</option>
                    <option value="6136c48286d3859d5d273f89">Gloom</option>
                    <option value="6136c48286d3859d5d273f8a">Vileplume</option>
                    <option value="6136c48286d3859d5d273f8b">Paras</option>
                    <option value="6136c48286d3859d5d273f8c">Parasect</option>
                    <option value="6136c48286d3859d5d273f8d">Venonat</option>
                    <option value="6136c48286d3859d5d273f8e">Venomoth</option>
                    <option value="6136c48286d3859d5d273f8f">Diglett</option>
                    <option value="6136c48286d3859d5d273f90">Dugtrio</option>
                    <option value="6136c48286d3859d5d273f91">Meowth</option>
                    <option value="6136c48286d3859d5d273f92">Persian</option>
                    <option value="6136c48286d3859d5d273f93">Psyduck</option>
                    <option value="6136c48286d3859d5d273f94">Golduck</option>
                    <option value="6136c48286d3859d5d273f95">Mankey</option>
                    <option value="6136c48286d3859d5d273f96">Primeape</option>
                    <option value="6136c48286d3859d5d273f97">Growlithe</option>
                    <option value="6136c48286d3859d5d273f98">Arcanine</option>
                    <option value="6136c48286d3859d5d273f99">Poliwag</option>
                    <option value="6136c48286d3859d5d273f9a">Poliwhirl</option>
                    <option value="6136c48286d3859d5d273f9b">Poliwrath</option>
                    <option value="6136c48286d3859d5d273f9c">Abra</option>
                    <option value="6136c48286d3859d5d273f9d">Kadabra</option>
                    <option value="6136c48286d3859d5d273f9e">Alakazam</option>
                    <option value="6136c48286d3859d5d273f9f">Machop</option>
                    <option value="6136c48286d3859d5d273fa0">Machoke</option>
                    <option value="6136c48286d3859d5d273fa1">Machamp</option>
                    <option value="6136c48286d3859d5d273fa2">Bellsprout</option>
                    <option value="6136c48286d3859d5d273fa3">Weepinbell</option>
                    <option value="6136c48286d3859d5d273fa4">Victreebel</option>
                    <option value="6136c48286d3859d5d273fa5">Tentacool</option>
                    <option value="6136c48286d3859d5d273fa6">Tentacruel</option>
                    <option value="6136c48286d3859d5d273fa7">Geodude</option>
                    <option value="6136c48286d3859d5d273fa8">Graveler</option>
                    <option value="6136c48286d3859d5d273fa9">Golem</option>
                    <option value="6136c48286d3859d5d273faa">Ponyta</option>
                    <option value="6136c48286d3859d5d273fab">Rapidash</option>
                    <option value="6136c48286d3859d5d273fac">Slowpoke</option>
                    <option value="6136c48286d3859d5d273fad">Slowbro</option>
                    <option value="6136c48286d3859d5d273fae">Magnemite</option>
                    <option value="6136c48286d3859d5d273faf">Magneton</option>
                    <option value="6136c48286d3859d5d273fb0">Farfetch'd</option>
                    <option value="6136c48286d3859d5d273fb1">Doduo</option>
                    <option value="6136c48286d3859d5d273fb2">Dodrio</option>
                    <option value="6136c48286d3859d5d273fb3">Seel</option>
                    <option value="6136c48286d3859d5d273fb4">Dewgong</option>
                    <option value="6136c48286d3859d5d273fb5">Grimer</option>
                    <option value="6136c48286d3859d5d273fb6">Muk</option>
                    <option value="6136c48286d3859d5d273fb7">Shellder</option>
                    <option value="6136c48286d3859d5d273fb8">Cloyster</option>
                    <option value="6136c48286d3859d5d273fb9">Gastly</option>
                    <option value="6136c48286d3859d5d273fba">Haunter</option>
                    <option value="6136c48286d3859d5d273fbb">Gengar</option>
                    <option value="6136c48286d3859d5d273fbc">Onix</option>
                    <option value="6136c48286d3859d5d273fbd">Drowzee</option>
                    <option value="6136c48286d3859d5d273fbe">Hypno</option>
                    <option value="6136c48286d3859d5d273fbf">Krabby</option>
                    <option value="6136c48286d3859d5d273fc0">Kingler</option>
                    <option value="6136c48286d3859d5d273fc1">Voltorb</option>
                    <option value="6136c48286d3859d5d273fc2">Electrode</option>
                    <option value="6136c48286d3859d5d273fc3">Exeggcute</option>
                    <option value="6136c48286d3859d5d273fc4">Exeggutor</option>
                    <option value="6136c48286d3859d5d273fc5">Cubone</option>
                    <option value="6136c48286d3859d5d273fc6">Marowak</option>
                    <option value="6136c48286d3859d5d273fc7">Hitmonlee</option>
                    <option value="6136c48286d3859d5d273fc8">Hitmonchan</option>
                    <option value="6136c48286d3859d5d273fc9">Lickitung</option>
                    <option value="6136c48286d3859d5d273fca">Koffing</option>
                    <option value="6136c48286d3859d5d273fcb">Weezing</option>
                    <option value="6136c48286d3859d5d273fcc">Rhyhorn</option>
                    <option value="6136c48286d3859d5d273fcd">Rhydon</option>
                    <option value="6136c48286d3859d5d273fce">Chansey</option>
                    <option value="6136c48286d3859d5d273fcf">Tangela</option>
                    <option value="6136c48286d3859d5d273fd0">Kangaskhan</option>
                    <option value="6136c48286d3859d5d273fd1">Horsea</option>
                    <option value="6136c48286d3859d5d273fd2">Seadra</option>
                    <option value="6136c48286d3859d5d273fd3">Goldeen</option>
                    <option value="6136c48286d3859d5d273fd4">Seaking</option>
                    <option value="6136c48286d3859d5d273fd5">Staryu</option>
                    <option value="6136c48286d3859d5d273fd6">Starmie</option>
                    <option value="6136c48286d3859d5d273fd7">Mr. Mime</option>
                    <option value="6136c48286d3859d5d273fd8">Scyther</option>
                    <option value="6136c48286d3859d5d273fd9">Jynx</option>
                    <option value="6136c48286d3859d5d273fda">Electabuzz</option>
                    <option value="6136c48286d3859d5d273fdb">Magmar</option>
                    <option value="6136c48286d3859d5d273fdc">Pinsir</option>
                    <option value="6136c48286d3859d5d273fdd">Tauros</option>
                    <option value="6136c48286d3859d5d273fde">Magikarp</option>
                    <option value="6136c48286d3859d5d273fdf">Gyarados</option>
                    <option value="6136c48286d3859d5d273fe0">Lapras</option>
                    <option value="6136c48286d3859d5d273fe1">Ditto</option>
                    <option value="6136c48286d3859d5d273fe2">Eevee</option>
                    <option value="6136c48286d3859d5d273fe3">Vaporeon</option>
                    <option value="6136c48286d3859d5d273fe4">Jolteon</option>
                    <option value="6136c48286d3859d5d273fe5">Flareon</option>
                    <option value="6136c48286d3859d5d273fe6">Porygon</option>
                    <option value="6136c48286d3859d5d273fe7">Omanyte</option>
                    <option value="6136c48286d3859d5d273fe8">Omastar</option>
                    <option value="6136c48286d3859d5d273fe9">Kabuto</option>
                    <option value="6136c48286d3859d5d273fea">Kabutops</option>
                    <option value="6136c48286d3859d5d273feb">Aerodactyl</option>
                    <option value="6136c48286d3859d5d273fec">Snorlax</option>
                    <option value="6136c48286d3859d5d273fed">Articuno</option>
                    <option value="6136c48286d3859d5d273fee">Zapdos</option>
                    <option value="6136c48286d3859d5d273fef">Moltres</option>
                    <option value="6136c48286d3859d5d273ff0">Dratini</option>
                    <option value="6136c48286d3859d5d273ff1">Dragonair</option>
                    <option value="6136c48286d3859d5d273ff2">Dragonite</option>
                    <option value="6136c48286d3859d5d273ff3">Mewtwo</option>
                    <option value="6136c48286d3859d5d273ff4">Mew</option>

                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Place;
