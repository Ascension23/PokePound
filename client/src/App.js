import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Place from './pages/Place';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleAdoption from './pages/SingleAdoption';

import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

import Testpokemon from './pages/Testpokemon';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh" id="fonts">
          <Header />
          <div className="container flex-row justify-center">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Adopt">
              <Adopt />
            </Route>

            <Route exact path="/pokemon">
              <Testpokemon />
            </Route>

            <Route exact path="/place">
              <Place />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/profiles/:username">
              <Profile />
            </Route>
            <Route exact path="/adoptions/:adoptionId">
              <SingleAdoption />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
