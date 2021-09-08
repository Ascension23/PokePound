import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import classes from './index.module.css';


const AdoptList = ({ adoptions }) => {
  if (!adoptions.length) {
    return <h3>No adoptions Yet . . .</h3>;
  }
  console.log(adoptions)

  return (
    <div>
      {adoptions &&
        adoptions.map((adoption) => (

          <Card className={classes.body}>
          <Card.Img variant="top" src={adoption.pokemon.gif} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">added: {adoption.createdAt}</Card.Subtitle>
            <Card.Title>name: {adoption.name}</Card.Title>
            <Card.Text>
              description: {adoption.description}
            </Card.Text>
            <Button href={`/adoptions/${adoption._id}`} variant="light">individual adoption (no component yet)</Button>
          </Card.Body>
          </Card>

        ))}
    </div>
  );
};

export default AdoptList;
