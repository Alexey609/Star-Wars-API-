import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Components/Header';
// import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import Planets from './Pages/Planets';
import { Container } from 'react-bootstrap';
import { Loader, Dimmer, Grid } from 'semantic-ui-react';

function App() {
  const [films, setFilms] = useState([]);
  const [filmsCount, setFilmsCount] = useState(0);
  const [planets, setPlanets] = useState([]);
  const [planetsCount, setPlanetsCount] = useState(0);
  const [loading, setLoading] = useState([true]);
  const [people, setPeople] = useState([]);
  const [peopleCount, setPeopleCount] = useState(0);
  const [species, setSpecies] = useState([]);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [starships, setStarships] = useState([]);
  const [starshipsCount, setStarshipsCount] = useState(0);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setFilms(data.results);
      setFilmsCount(data.count);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
      setPlanetsCount(data.count)
    }

    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
      setPeopleCount(data.count);
    }


    async function fetchSpecies() {
      let res = await fetch('https://swapi.dev/api/species/');
      let data = await res.json();
      setSpecies(data.results);
      setSpeciesCount(data.count);
    }

     async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/');
      let data = await res.json();
      setVehicles(data.results);
      setVehiclesCount(data.count);
    }

    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/');
      let data = await res.json();
      setStarships(data.results);
      setStarshipsCount(data.count);
    }

    fetchFilms();
    fetchPlanets();
    fetchPeople();
    fetchSpecies();
    fetchVehicles();
    fetchStarships();
    setLoading(false);
  }, []);
  return (
    <>
     <Router>
       <Header />
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
          <Route exact path='/stats'>
           <Stats data={{filmsCount, planetsCount, peopleCount, speciesCount, vehiclesCount, starshipsCount}}/>
          </Route>
          <Route exact path='/planets'>
           <Planets data={planets}/>
          </Route>
        </Switch>
         )}
       </Container>
     </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;
