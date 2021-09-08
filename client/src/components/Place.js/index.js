// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form, Select } from 'react-bootstrap';

// import { useQuery } from '@apollo/client'; // querying pokemon for dropdown shit . . .
// import { QUERY_POKEMONS } from '../utils/queries'; // querying pokemon for dropdown shit . . .
// import PokeList from '../components/Testpokemon';

// const Dropdown = () => {
//   //querying pokemons
//   const { loading, data } = useQuery(QUERY_POKEMONS);
//   const pokemons = data?.pokemons || [];
//   console.log(pokemons);


//   return (

//     {/* DROPDOWN */}
//     <Form.Group className="mb-3" controlId="formDropDown">
//       <Form.Label>pokeSelect</Form.Label>
//       <Form.Control as="select" value={formState.pokemon} placeholder="pokemon" onChange={handleChange}>
//           {/* <option text="text" name="pokemon" value="6136c48286d3859d5d273fc9" onChange={handleChange}>Lickitung</option>
//           <option text="text" name="pokemon" value="6136c48286d3859d5d273fca">Koffing</option> */}
//           <option value="">select pokemon</option>
//           {pokemons.map(c => <option key={c}> {c} </option>)}

//       </Form.Control>
//     </Form.Group>

//   );
// };

// export default Dropdown;
