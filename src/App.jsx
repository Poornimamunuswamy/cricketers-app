import './App.css';
import CricketerDetails from './components/CricketerDetails';
import Cricketers from './components/Cricketers';
import getPlayers from "./get-players";
import { PlayerContext } from './context';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from 'react';
function App() {
  const [playerList, setPlayerList] = useState([]);

  const getplayerList = async () =>
    await getPlayers().then((res) => res);

  useEffect(() => {
    const loadList = async () => {
      const list = await getplayerList();
      setPlayerList(list);
    }
    loadList();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <PlayerContext.Provider value={playerList}>
          <Routes>
            <Route path='/' Component={Cricketers}></Route>
            <Route path='/CricketerDetails' Component={CricketerDetails}></Route>
          </Routes>
        </PlayerContext.Provider>
      </Router>
    </div>
  );
}

export default App;
