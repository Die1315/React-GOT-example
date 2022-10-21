import Header from "./components/Header";
import "./App.css";
import EpisodeList from "./components/EpisodeList";
import SeasonsFilter from "./components/SeasonsFilter";
import { useState } from "react";
//import Timer from './components/Timer';
import SearchBar from "./components/SearchBar";
//import Login from "./components/Login";

function App() {
const [season, setSeason] = useState(1);  //desde el padre se debe enviar a los hijos a traves de los parametros para que se puedan actualizar 
const [search, setSearch] = useState("");


  function filterSeason(season){
    setSeason(season);
  }
  function doSearch(search){
    setSearch(search)
  }

  return (
    <div className="App">
      
      <Header/>
      <div className="container">
        <SearchBar  search={search} doSearch={doSearch} />
        <SeasonsFilter season={season} filterSeason={filterSeason}/>
      
        <EpisodeList season={season} search={search} />
      </div>
      
    </div>
  );
}

export default App;
