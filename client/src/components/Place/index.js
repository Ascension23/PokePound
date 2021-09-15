import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, } from 'react-bootstrap';


import { useMutation } from '@apollo/client';
import { ADD_ADOPTION } from '../../utils/mutations';
// import Auth from '../utils/auth';

const PlaceForm = ({ pokemons }) => {

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
    <main className="flex-row justify-center mb-4" id="fonts">
      <div className="col-10 col-lg-8"  >
        <div className="card" >
          <h4 className="card-header bg-dark text-light p-2">Describe Your Pokémon</h4>
          <div className="card-body">
            {data ? (
              <p id="secFont">
                Success! You may see your Pokémon{' '}
                <Link to="/adopt">on the discussion page.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Name . . ." value={formState.name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" name="description" placeholder="Description . . ." value={formState.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDropDown">
                  <Form.Label>Select the Pokémon</Form.Label>
                  <Form.Control as="select" name="pokemon" value={formState.pokemon} onChange={handleChange} style={{ overflowY: 'auto' }} >
                    <option value="">Select the Pokémon . . .</option> 
                    {pokemons && pokemons.map((pokemon) => ( <option value={pokemon._id}>{pokemon.name}</option> ))}


                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" id="fonts">Submit</Button>
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

export default PlaceForm;