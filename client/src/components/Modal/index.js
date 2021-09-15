import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import ProfileList from '../components/ProfileList';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';

import { Card, Button, Image, Header, Grid, Modal, Icon, Form } from 'semantic-ui-react'


const ProfileModal = () => {
  const [open, setOpen] = React.useState(false) // for MODAL TEST

  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

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
      const { data } = await updateUser({
        variables: { ...formState },
      });
      // Auth.login(data.updateUser.token);
    } catch (e) {
      console.error(e);
    }

    window.location.reload(false)
  };


  return (
    <>
      <Header icon id="fonts">
        <Icon name='archive' />
        Update Profile Information
      </Header>
      <Modal.Content>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label>Username</label>
            <input name="username" type="text" value={formState.name} placeholder='Enter Updated Username . . .' onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" type="text" value={formState.email} placeholder='Enter Updated Email . . .' onChange={handleChange} />
          </Form.Field>
          {/* <Button type='submit'>Submit</Button> */}
          <Modal.Actions>
            <Button type="submit" color='green' inverted onClick={() => setOpen(false)}>
              <Icon name='checkmark' /> Update
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </>
  );

};

export default ProfileModal;
