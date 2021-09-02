import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_ADOPTION } from '../utils/mutations';

import Auth from '../utils/auth';

const Place = () => {
  const [formState, setFormState] = useState({
    name: '',
    level: '',
    attack: '',
    defense: '',
    description: '',
    pokemon: '',
  });

  const [addAdoption, { error }] = useMutation(ADD_ADOPTION);

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

      // Auth.login(data.addUser.token);
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
          {Auth.loggedIn() ? (
            <>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="level"
                  name="level"
                  type="text"
                  value={formState.level}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="attack"
                  name="attack"
                  type="text"
                  value={formState.attack}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="defense"
                  name="defense"
                  type="text"
                  value={formState.defense}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="pokemon"
                  name="pokemon"
                  type="text"
                  value={formState.pokemon}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
              </>

            ) : (
              <p>
                You need to be logged in to share your thoughts. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p>
            )}

          </div>
        </div>
      </div>
    </main>
  );
};

export default Place;
