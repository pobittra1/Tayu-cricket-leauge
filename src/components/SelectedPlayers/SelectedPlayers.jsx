import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, handleRemoveSelectedPlayer }) => {
    return (
        <div>
            <h2 className="text-xl font-bold capitalize text-green-400 my-2">total players: {selectedPlayers.length}/6</h2>
            {
                selectedPlayers.map(player => <SelectedPlayer key={player.id} player={player} handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;