import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Films from './Pages/Films';
import Planets from './Pages/Planets';
import { Container } from 'react-bootstrap';
import { Loader, Dimmer } from 'semantic-ui-react';

function App() {
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
   const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setFilms(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchFilms();
    fetchPlanets();
    setLoading(false);
  }, []);
  return (
    <>
     <Router>
       <Header></Header>
       <Container>
         {loading ? (
           <Dimmer active inverted>
             <Loader></Loader>
           </Dimmer>
         ) : (
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/films'>
           <Films data={films}/>
          </Route>
          <Route exact path='/planets'>
           <Planets data={planets}/>
          </Route>
        </Switch>
         )}
       </Container>
     </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
