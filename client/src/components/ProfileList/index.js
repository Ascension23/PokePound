import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
import { Card, Button, Image } from 'semantic-ui-react'
// import classes from './index.module.css';
import '../ProfileList/style.css'

import { useMutation } from '@apollo/client';
import { REMOVE_ADOPTION } from '../../utils/mutations';

const ProfileList = ({ adoptions }) => {
  const [ removeAdoption ] = useMutation(REMOVE_ADOPTION);

  if (!adoptions.length) {
    return <h3>Darn! There doesn't seem to be any Pokémon here!</h3>;
  }
  console.log(adoptions)


  //DELETE SHIT
  const handleDelete = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('AdoptionId');
    // console.log(`clicked the delete button ${id}`);
    try {
      const { data } = await removeAdoption({
        variables: {
          adoptionId: id,
        }
      });
    } catch (e) {
      console.error(e);
    }

    window.location.reload(false)
  };

  return (
    <div >
      <Card.Group itemsPerRow={2} style={{ display: 'flex', justifyContent: 'center', }}>
      {adoptions &&
        adoptions.map((adoption) => (
          <Card className="pokeCard__main">
            <Card.Content>
              <Image
              size='medium'
              src={adoption.pokemon.gif}
              wrapped ui={false}
              style={{ display: 'flex', justifyContent: 'center', height: '7rem', paddingTop: '1rem', paddingBottom: '1.5rem'}}
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
            <Card.Content extra style={{ display: 'flex', justifyContent: 'center', }}>     
            <Button href={`/adoptions/${adoption._id}`} variant="light">View discussion</Button>

            {/* delete button  */}
            <Button onClick={handleDelete} AdoptionId={adoption._id} variant="light">Delete discussion</Button>

            </Card.Content>
          </Card>
          
        ))}
        </Card.Group>
    </div>
  );
};

export default ProfileList;
