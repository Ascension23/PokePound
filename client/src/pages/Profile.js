import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';
import ProfileModal from '../components/Modal';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import { Card, Button, Image, Header, Grid, Modal, Icon, Form } from 'semantic-ui-react'


const Profile = () => {
  const [open, setOpen] = React.useState(false) // for MODAL TEST

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // console.log(user)

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // ORIGINAL PROFILE PAGE DISPLAY return
  // return (
  //   <div style={{ marginBottom: '5rem' }}>
  //     <div className="flex-row justify-center mb-3" >
 
  //       <div className="col-12 col-md-10 mb-5">
  //         <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem', paddingBottom: '2rem', }}>{ `${user.username}'s` } Posted Discussions</h1>
  //         <ProfileList
  //           adoptions={user.adoptions}
  //           title={`${user.username}'s adoptions...`}
  //           showTitle={false}
  //           showUsername={false}
  //         />

  //       </div>
  //     </div>
  //   </div>
  // );


  //Multiple columns and Modal and updating profile
  return (
    <div style={{ marginBottom: '5rem' }}>
      <div className="flex-row justify-center mb-3" > 
        <div className="col-12 col-md-10 mb-5">

          <Grid divided>
            <Grid.Row style={{ paddingTop: '5rem' }}>
              <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem', }}>{user.username}'s Profile</h1>
            </Grid.Row>

            <Grid.Row >
              <Grid.Column width={5} style={{ paddingRight: '2.5rem' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem', paddingBottom: '2rem', }}>User Info</h1>

                <Card style={{ width: '25rem', height: '30rem', borderRadius: '1rem'}}>
                  <Card.Content >
                    <Image src={process.env.PUBLIC_URL + '/dittoPlaceholder.png'}  style={{ borderRadius: '.85rem'}} />
                    {/* <h1 style={{ display: 'flex', justifyContent: 'center', }}>image placeholder</h1> */}
                    <Card.Header style={{ display: 'flex', justifyContent: 'center', paddingTop: '2.5rem', paddingBottom: '.25rem' }} >{user.username}</Card.Header>
                    {/* <Card.Meta><user.creat</Card.Meta> */}
                    <Card.Description style={{ display: 'flex', justifyContent: 'center' }}>
                    {user.email}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>     
                  {/* <Button size='tiny'  variant="light">update info</Button> */}
                    <Modal
                      basic
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      size='small'
                      trigger={<Button>Update Info</Button>}
                      style={{ top: '20rem', bottom: 'auto', right: 'auto', left: 'auto' }}
                    >
                      <ProfileModal
                      />
                    </Modal>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column width={11} >
                <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem', paddingBottom: '2rem', }}>Posted Discussions</h1>
                <ProfileList
                  adoptions={user.adoptions}
                  title={`${user.username}'s adoptions...`}
                  showTitle={false}
                  showUsername={false}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
      </div>
    </div>
  );

};

export default Profile;
