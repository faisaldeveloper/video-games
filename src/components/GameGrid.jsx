import React, {useState, useEffect} from 'react'
import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames.jsx'

const GameGrid = () => {

    const {games, error} = useGames();
    
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