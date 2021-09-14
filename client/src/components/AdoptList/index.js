import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
import { Card, Button, Image } from 'semantic-ui-react'
// import classes from './index.module.css';
import '../AdoptList/style.css'


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
          <Card className="pokeCard__main ">
            <Card.Content>
              <Image
              size='medium'
              src={adoption.pokemon.gif}
              wrapped ui={false}
              style={{ display: 'flex', justifyContent: 'center', height: '9rem', paddingTop: '1rem', paddingBottom: '1.5rem'}}
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
            <Card.Content style={{ display: 'flex', justifyContent: 'center', }}>     
            <Button href={`/adoptions/${adoption._id}`} variant="light">Discuss this Pokémon</Button>
            </Card.Content>
          </Card>
          
        ))}
        </Card.Group>
    </div>
  );
};

export default AdoptList;
