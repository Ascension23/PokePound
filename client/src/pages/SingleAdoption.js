import React from 'react';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_ADOPTION } from '../utils/queries';
import { Card, Button, Image, Header } from 'semantic-ui-react'
import Raiting from '../components/Raiting/Raiting'

import '../../src/components/ProfileList/style.css'


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
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: '5rem', width: '50rem', marginBottom: '5rem' }} id="fonts">
      <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '3rem', }}id="fonts">Discussing {adoption.name} . . .</h1>
        <div style={{ display: 'flex', justifyContent: 'center', }}>
          <Card style={{ width: '35rem', height: '25rem'}} className="pokeCard__single">
            <Card.Content style={{ paddingTop: '2rem',}}>
              <Image
              size='medium'
              src={adoption.pokemon.gif}
              wrapped ui={false}
              fluid
              centered
              style={{ display: 'flex', justifyContent: 'center', height: '13rem', paddingTop: '1rem', paddingBottom: '1.5rem'}}
              />
              <Card.Header style={{ display: 'flex', justifyContent: 'center', }}id="fonts">{adoption.name}</Card.Header>
              <Card.Meta style={{ display: 'flex', justifyContent: 'center', }}>Added: {adoption.createdAt}</Card.Meta>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', fontSize: '18px'}}id="secFont">
              Species: {adoption.pokemon.name}
              </Card.Description>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', fontSize: '18px'}}id="secFont">
              Description: {adoption.description}
              </Card.Description>
              <Card.Description style={{ display: 'flex', justifyContent: 'center', fontSize: '18px'}}id="secFont">
              Level: {adoption.pokemon.level}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>

      <h2 style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px dotted #1a1a1a', marginTop: '5rem', paddingBottom: '1rem'}} id='fonts'>
        Comments
      </h2>
      {/* POLICY CARD */}
      <Card style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '2.5rem', width: '50rem', backgroundColor: 'lightgrey'}}>
        <div class="content" >
          <Header>
          <h3 style={{ display: 'flex', justifyContent: 'center' }}id='fonts'>Poké Talk Comment Policy</h3>
          </Header>
          <p className="card-body"id='secFont'>We respect discourse and you don't have to agree with the points made, but please be constructive.</p>
        </div>
      </Card>

      {/* what are you thoughts? div */}
      <div style={{ paddingTop: '1rem', padding: '1rem', borderRadius: '.5rem', border: '1px dotted #1a1a1a', }}>
        <CommentForm adoptionId={adoption._id} />
      </div>
      <div>
        <Raiting/>
      </div>

      {/* listed comments div */}
      <div >
        <CommentList comments={adoption.comments} />
      </div>
      


      {/* <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm adoptionId={adoption._id} />
      </div> */}
    </div>
  );
};

export default SingleAdoption;


// TO DO: style the "what are you thoughts bit"