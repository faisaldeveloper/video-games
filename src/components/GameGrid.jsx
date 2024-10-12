import React, {useState, useEffect} from 'react'
import apiClient from '../services/api-client.jsx'
import { Text } from '@chakra-ui/react'


const GameGrid = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get('/games')
        .then( res => setGames(res.data.results))
        .catch( err => setError(err.message))
    }, []);

  return (
    <>
    <div>GameGrid</div>
    {error && <Text>{error}</Text>}
    <ul>
        { games.map(game => <li key={game.id}>{game.name}</li>) }
    </ul>
    </>
  )
}

export default GameGrid