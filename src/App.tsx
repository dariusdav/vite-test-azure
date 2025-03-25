import "./App.css";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Rate your steam games!
      </h1>
      <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
        This is a simple app that allows you to rank your steam library. Just
        login with your steam account or provide your steamdId and start
        ranking! Once you have ranked your game list, you can compare with
        your friends! Share it with a link!
      </p>
      <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
        As users rank the games, the global ranking will update!
      </p>
      <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
        You can also see the top 100 games in the world!
      </p>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Have fun!
      </p>
      <div className="flex flex-col items-center gap-4">
        <button className="w-64 rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-600">
          Login with Steam
        </button>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="SteamId"
            className="w-40 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <button className="rounded-lg bg-gray-500 px-6 py-2 font-semibold whitespace-nowrap text-white transition-colors hover:bg-gray-600">
            Login with SteamId
          </button>
        </div>
      </div>
    </div>
  );
}
