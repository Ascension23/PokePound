import React from 'react';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_ADOPTION } from '../utils/queries';
import { Card, Button, Image, Header } from 'semantic-ui-react'
import Raiting from '../components/Raiting/Raiting'

const SingleAdoption = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { adoptionId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ADOPTION, {
    // pass URL parameter
    variables: { adoptionId: adoptionId },
  });

  const adoption = data?.adoption || {};
  console.log(adoption)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center',flexDirection: 'column', paddingTop: '5rem', width: '50rem' }}>
      {/* <h3 className="card-header bg-dark text-light p-2 m-0">
        {adoption.name} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {adoption.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {adoption.description}
        </blockquote>
        <img src={adoption.pokemon.gif} />
      </div> */}
      <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '3rem', }}>Discussing {adoption.name} . . .</h1>
        <div style={{ display: 'flex', justifyContent: 'center', }}>
          <Card style={{ width: '35rem', height: '25rem'}}>
            <Card.Content style={{ paddingTop: '2rem',}}>
              <Image
              size='medium'
              src={adoption.pokemon.gif}
              wrapped ui={false}
              fluid
              centered
              style={{ display: 'flex', justifyContent: 'center', height: '13rem', paddingTop: '1rem', paddingBottom: '1.5rem'}}
              />
              <Card.Header style={{ display: 'flex', justifyContent: 'center', }}>{adoption.name}</Card.Header>
              <Card.Meta style={{ display: 'flex', justifyContent: 'center', }}>Added: {adoption.createdAt}</Card.Meta>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', }}>
              Species: {adoption.pokemon.name}
              </Card.Description>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', }}>
              Description: {adoption.description}
              </Card.Description>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', }}>
              Level: {adoption.pokemon.level}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>

      <h2
        // className="p-5 display-inline-block"
        style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px dotted #1a1a1a', marginTop: '5rem', paddingBottom: '1rem'}} 
      >
        Comments
      </h2>
      {/* POLICY CARD */}
      <Card style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', width: '50rem'}}>
        <div class="content" >
          <Header>
          <p>Poké Talk Comment Policy</p>
          </Header>
          <p className="card-body">We respect discourse and you don't have to agree with the points made, but please be constructive.</p>
        </div>
      </Card>




      {/* listed comments div */}
      <div >
        <CommentList comments={adoption.comments} />
      </div>
      
      {/* what are you thoughts? div */}
      <div className="m-3 p-4" style={{ borderRadius: '.5rem', border: '1px dotted #1a1a1a' }}>
        <CommentForm adoptionId={adoption._id} />
      </div>
      <div>
        <Raiting/>
      </div>

      {/* <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm adoptionId={adoption._id} />
      </div> */}
    </div>
  );
};

export default SingleAdoption;


// TO DO: style the "what are you thoughts bit"