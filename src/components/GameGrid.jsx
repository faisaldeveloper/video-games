import React from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames.jsx'
import GameCard from './GameCard.jsx'
import GameCardSkeleton from './GameCardSkeleton.jsx'
import GameCardContainer from './GameCardContainer.jsx'


const GameGrid = ({gameQuery}) => {

    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8];
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={3}>
        { isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
        { data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid