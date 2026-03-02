import { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {
    const players = use(playersPromise);
    return (
        <div>
            <h2 className="text-xl font-bold capitalize text-green-400 my-2">total players: {players.length - selectedPlayers.length}</h2>
            <div className="players-card-container grid grid-cols-1 md:grid-cols-3 gap-2">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        availableBalance={availableBalance}
                        setAvailableBalance={setAvailableBalance}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;