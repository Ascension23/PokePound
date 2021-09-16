import React from 'react';

import { useQuery } from '@apollo/client';
import AdoptList from '../components/AdoptList';
import { QUERY_ADOPTIONS } from '../utils/queries';

const Adopt = () => {
  
  const { loading, data } = useQuery(QUERY_ADOPTIONS);
  const adoptions = data?.adoptions || [];

  return (
    <main id="fonts">
      <div className="flex-row justify-center" style={{ paddingTop: '5rem', marginBottom: '5rem'}}>
        {/* <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}></div> */}
          <div className="col-12 col-md-8 mb-3">
            {loading ? (

              <div>Loading...</div>
            ) : (
              <>
              <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem', }} id="fonts">Pokémon up For Discussion</h1>
                <AdoptList
                  adoptions={adoptions}
                  title="Pokémon up For Adoption . . ."
                />
              </>

            )}
          </div>
      </div>
    </main>
  );
};

export default Adopt;
