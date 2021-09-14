import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user.username)

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginBottom: '5rem' }}>
      <div className="flex-row justify-center mb-3" >
 
        <div className="col-12 col-md-10 mb-5">
          <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem', paddingBottom: '2rem', }}>{ `${user.username}'s` } Posted Discussions</h1>
          <ProfileList
            adoptions={user.adoptions}
            title={`${user.username}'s adoptions...`}
            showTitle={false}
            showUsername={false}
          />

        </div>
      </div>
    </div>
  );
};

export default Profile;
