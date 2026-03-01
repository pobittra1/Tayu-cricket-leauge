
import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


//load players data here
const playersPromise = fetch("/players.json").then(res => res.json());

function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className="players-container w-10/12 mx-auto my-4">
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </div>
    </>
  )
}

export default App
