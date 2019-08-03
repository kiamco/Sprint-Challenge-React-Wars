import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import StarCard from "./components/PeopleCard"

const App = () => {
  const [people, setPeople] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


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
