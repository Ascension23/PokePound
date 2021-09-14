import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
import { Card, Button, Image } from 'semantic-ui-react'
// import classes from './index.module.css';


const AdoptList = ({ adoptions }) => {
  if (!adoptions.length) {
    return <h3>Darn! There doesn't seem to be any Pokémon here!</h3>;
  }
  console.log(adoptions)

  return (
    <div>
      <Card.Group itemsPerRow={2}>
      {adoptions &&
        adoptions.map((adoption) => (
          <Card>
            <Card.Content>
              <Image
              size='medium'
              src={adoption.pokemon.gif}
              wrapped ui={false}
              fluid
              centered
              />
              <Card.Header>{adoption.name}</Card.Header>
              <Card.Meta>Added: {adoption.createdAt}</Card.Meta>
              <Card.Description>
              Species: {adoption.pokemon.name}
              </Card.Description>
              <Card.Description>
              Description: {adoption.description}
              </Card.Description>
              <Card.Description>
              Level: {adoption.pokemon.level}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>     
            <Button href={`/adoptions/${adoption._id}`} variant="light">Discuss this Pokémon</Button>
            </Card.Content>
          </Card>
          
        ))}
        </Card.Group>
    </div>
  );
};

export default AdoptList;
