const SelectedPlayer = ({ player }) => {

    if (player.length === 0) {
        return (
            <div className="max-w-3xl mx-auto mt-10 px-4">
                <div className="bg-base-100 shadow-md rounded-2xl p-10 text-center border border-dashed border-base-300">
                    <h2 className="text-xl font-semibold mb-2">
                        No Players Selected
                    </h2>
                    <p className="text-gray-500 text-sm">
                        You haven't selected any players yet.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="max-w-3xl mx-auto mt-8 px-4">
            <div className="bg-base-100 shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300">

                <div className="flex items-center justify-between">

                    {/* Left Side */}
                    <div className="flex items-center gap-4">
                        <img
                            src={player.image}
                            alt={player.name}
                            className="w-16 h-16 rounded-xl object-cover border"
                        />

                        <div>
                            <p className="text-lg font-semibold">
                                {player.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {player.batting_style}
                            </p>
                        </div>
                    </div>

                    {/* Delete Button */}
                    <button className="btn btn-sm btn-error btn-outline">
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SelectedPlayer;