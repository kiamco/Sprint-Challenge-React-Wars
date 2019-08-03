import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import StarCard from "./components/PeopleCard"

const App = () => {
  const [people, setPeople] = useState([]); 

  // call that Api
 useEffect(() => {
    Axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
      })
      .catch(err => console.log(`App.js/ err: ${err}`))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarCard info={people}/>
    </div>
  );
}

export default App;
