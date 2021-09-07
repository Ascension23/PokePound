import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

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
          <h4 className="card-header bg-dark text-light p-2">Place Pokemon up for Adoption</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may see your adoption{' '}
                <Link to="/adopt">on the adoption page.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="name . . ." value={formState.name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>description</Form.Label>
                  <Form.Control type="text" name="description" placeholder="description" value={formState.description} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>pokemon</Form.Label>
                  <Form.Control type="text" name="pokemon" placeholder="pokemon" value={formState.pokemon} onChange={handleChange}/>
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
