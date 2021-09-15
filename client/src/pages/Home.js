import React from 'react';
// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { Image, Container, Button, } from 'semantic-ui-react'
import '../pages/style.css'
// import Auth from '../utils/auth';


const Home = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <main id="fonts">
      <div>
      <Container className="homePage" style={{ justifyContent: 'center' }}> 
			<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Image src='/poketalk.png' fluid size='large' />
			</div>
        <p class="pkmn-text">A world of dreams and adventures with Pokemon awaits! Let's go!</p>
          
          <div class="pkmn-group" style={{display: 'flex', justifyContent: 'center'}}>
              <div class="pkmn pkmn__pikachu"></div>
              <div class="pkmn pkmn__quadruped"></div>
              <div class="pkmn pkmn__snake"></div>
              <div class="pkmn pkmn__rhydon"></div>
              <div class="pkmn pkmn__bug"></div>
              <div class="pkmn pkmn__plant"></div>
              <div class="pkmn pkmn__clefairy"></div>
              <div class="pkmn pkmn__ball"></div>
              <div class="pkmn pkmn__fossil"></div>
              <div class="pkmn pkmn__aquatic"></div>
          </div>
          {/* {Auth.loggedIn() ? (
        <>
        <h1  style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem', }} id="fonts">List Your Pokemon for Discussion</h1>
          
        </>
        ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }} id="fonts">
            <Button variant="danger" href="/me" id="fonts">{Auth.getProfile().daa.username}'s profile</Button>
            <Button variant="secondary" onClick={logout} id="fonts">Log Out</Button>
          </div>
        </>
      )} */}
          </Container> 
      </div>
    </main>
  );
};

export default Home;

