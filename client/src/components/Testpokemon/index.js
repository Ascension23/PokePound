import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const PokeList = ({ pokemons }) => {
  if (!pokemons.length) {
    return <h3>No pokemons Yet . . .</h3>;
  }
  console.log(pokemons)

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => (

          <Card >
          {/* <Card.Img variant="top" src={pokemon.name} /> */}
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted" >added: {pokemon.createdAt}</Card.Subtitle>
            <Card.Title>name: {pokemon.name}</Card.Title>
            <Card.Text>
              id: {pokemon._id}
            </Card.Text>
            <Button href={`/pokemons/${pokemon._id}`} variant="light">to ind. pokemon</Button>
          </Card.Body>
          </Card>

        ))}
    </div>
  );
};

export default PokeList;
