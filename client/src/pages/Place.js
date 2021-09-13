import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Select } from 'react-bootstrap';

import PlaceForm from '../components/Place';
import { useQuery } from '@apollo/client'; // querying pokemon for dropdown shit . . .
import { QUERY_POKEMONS } from '../utils/queries'; // querying pokemon for dropdown shit . . .

// import { useMutation } from '@apollo/client';
// import { ADD_ADOPTION } from '../utils/mutations';
// import Auth from '../utils/auth';

const Place = () => {

  const { loading, data } = useQuery(QUERY_POKEMONS);
  const pokemons = data?.pokemons || [];

  return (
    <main>
    <div className="flex-row justify-center" style={{ paddingTop: '5rem', width: '100rem'}}>
      <div className="col-12 col-md-8 mb-3">
      {loading ? (

        <div>Loading...</div>
      ) : (
        <>
        <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem', }}>List Your Pokemon for Discussion</h1>

          <PlaceForm
            pokemons={pokemons}
          />

        </>
      )}
      </div>
    </div>
    </main>
  );
};

export default Place;
