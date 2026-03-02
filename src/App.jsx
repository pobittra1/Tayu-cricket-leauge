
import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


//load players data here
const playersPromise = fetch("/players.json").then(res => res.json());

function App() {
  const [toggleAvailableSelectedBtn, SetToggleAvailableSelectedBtn] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(50000000);


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="players-container w-10/12 mx-auto my-4">
        <div className="toggle-bar flex justify-between items-center">
          <h2 className='capitalize text-3xl text-slate-500 font-bold'>{toggleAvailableSelectedBtn ? "available players" : "selected players"}</h2>
          <div className="toggle-btn flex gap-2">
            <button onClick={() => SetToggleAvailableSelectedBtn(true)} className={`border py-2 cursor-pointer px-4 ${toggleAvailableSelectedBtn && "bg-green-500"}`}>Available (25)</button>
            <button onClick={() => SetToggleAvailableSelectedBtn(false)} className={`border py-2 cursor-pointer px-4 ${!toggleAvailableSelectedBtn && "bg-green-500"}`}>Selected (0)</button>
          </div>
        </div>
        {
          toggleAvailableSelectedBtn ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <AvailablePlayers playersPromise={playersPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
          </Suspense> : <SelectedPlayers></SelectedPlayers>
        }

      </div>
    </>
  )
}

export default App
