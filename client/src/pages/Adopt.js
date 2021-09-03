import React from 'react';

import { useQuery } from '@apollo/client';
import AdoptList from '../components/AdoptList';
import { QUERY_ADOPTIONS } from '../utils/queries';

const Adopt = () => {
  const { loading, data } = useQuery(QUERY_ADOPTIONS);
  const adoptions = data?.adoptions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        {/* <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}></div> */}
          <div className="col-12 col-md-8 mb-3">
            {loading ? (

              <div>Loading...</div>
            ) : (
              <>
              <h1>adoptables . . .</h1>
                <AdoptList
                  adoptions={adoptions}
                  title="adopatables . . ."
                />
              </>

            )}
          </div>
      </div>
    </main>
  );
};

export default Adopt;
