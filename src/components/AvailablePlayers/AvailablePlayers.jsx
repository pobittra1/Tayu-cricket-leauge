import { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ playersPromise }) => {
    const players = use(playersPromise);
    console.log(players);
    return (
        <div>
            <h2 className="text-3xl font-bold capitalize text-green-400 my-2">total players: {players.length}</h2>
            <div className="players-card-container grid grid-cols-3 gap-2">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;