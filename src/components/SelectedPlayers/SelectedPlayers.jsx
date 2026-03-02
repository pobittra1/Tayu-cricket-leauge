import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
    return (
        <div>
            <h2 className="text-xl font-bold capitalize text-green-400 my-2">total players: {selectedPlayers.length}</h2>
            {
                selectedPlayers.map(player => <SelectedPlayer key={player.id} player={player}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;