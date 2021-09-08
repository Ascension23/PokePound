import React from 'react';

import { useQuery } from '@apollo/client'; // querying pokemon for dropdown shit . . .
import { QUERY_POKEMONS } from '../utils/queries'; // querying pokemon for dropdown shit . . .
import PokeList from '../components/Testpokemon';



const Pokemon = () => {
  const { loading, data } = useQuery(QUERY_POKEMONS);
  const pokemons = data?.pokemons || [];

  return (
    <main>
      <div className="flex-row justify-center">
        {/* <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}></div> */}
          <div className="col-12 col-md-8 mb-3">
            {loading ? (

              <div>Loading...</div>
            ) : (
              <>
              <h1>pokemons . . .</h1>
                {/* {pokemons} */}

                <PokeList
                  pokemons={pokemons}
                  title="pokes . . ."
                />

              </>

            )}
          </div>
      </div>
    </main>
  );
};

export default Pokemon;
