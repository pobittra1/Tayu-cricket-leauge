const SelectedPlayers = () => {
    return (
        <div className="selected-players-container">
            <ul>
                <li>
                    <div>
                        <img src="" alt="image here" />
                        <div className="info">
                            <p className="name"></p>
                            <p className="batting-style"></p>
                        </div>
                    </div>
                    <button>delete</button>
                </li>
            </ul>
        </div>
    );
};

export default SelectedPlayers;