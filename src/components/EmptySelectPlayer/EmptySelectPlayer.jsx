const EmptySelectPlayer = () => {
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
};

export default EmptySelectPlayer;