import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image, Header, Form } from 'semantic-ui-react'

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ adoptionId }) => {

  const [formState, setFormState] = useState({
    adoptionId: adoptionId,
    commentText: '',
  });

  const [addComment, { error }] = useMutation(ADD_COMMENT);

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
      const { data } = await addComment({
        variables: { ...formState },
      });
      Auth.getToken(data.addAdoption.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({ adoptionId: adoptionId, commentText: ''});
  };

  return (
    <div id="fonts">
      <h3 id='fonts'>What are your thoughts on this pokemon?</h3>
      {Auth.loggedIn() ? (
        <>
        <Form onSubmit={handleFormSubmit} reply>
          <Form.TextArea
            name="commentText"
            placeholder="Add your comment..."
            value={formState.commentText}
            onChange={handleChange} />
          <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' basic />
        </Form>
        </>
      ) : (
        <p id='secFont'>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
