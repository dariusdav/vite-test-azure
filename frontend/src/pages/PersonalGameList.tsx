import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//fetch the game list from the steam api using the steamId and the steam api key
const fetchGameList = async (steamId: string) => {
    if (import.meta.env.VITE_STEAM_API_KEY == undefined) {
        console.log("No steam api key found");
        return;
    }
    console.log(import.meta.env.VITE_STEAM_API_KEY);
    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=${steamId}&format=json`);
    const data = await response.json();
    return data;
}

const PersonalGameList = () => {
    const { steamId } = useParams();
    const [gameList, setGameList] = useState<any[]>([]);

    useEffect(() => {
        if (steamId != undefined) {
            fetchGameList(steamId).then((data) => {
                console.log(data);
            });
        }
        else {
            console.log("No steamId provided");
        }
    }, [steamId]);

    return (
        <div className="container">
            <h1>My Personal Game List</h1>
            <div className="game-list">
                {/* Add your game list content here */}
            </div>
        </div>
    );
};

export default PersonalGameList; 