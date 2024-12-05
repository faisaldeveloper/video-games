import { HStack, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar.jsx'
import GameGrid from './components/GameGrid.jsx'
import GenresList from './components/GenresList.jsx'
import PlatformSelector from './components/PlatformSelector.jsx'
import { useState } from 'react'
import SortSelector from './components/SortSelector.jsx'


function App() {
  
  const [gameQuery, setGameQuery] = useState({});

  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:    `"nav nav" "aside main"`}}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
    >            
      <GridItem area={'nav'}> ** {gameQuery.genre ? gameQuery.genre.name + ' Genres' : 'All Genres'}
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText}) } />
      </GridItem>
      <Show above="lg">
      <GridItem pl='2' bg='grey.300' area={'aside'} paddingX={5}>
        <GenresList selectedGenre={gameQuery.genre} onSelectGenre={ (genre) => { setGameQuery({...gameQuery, genre})} } />
      </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <HStack spacing={5} marginBottom={2}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={ (platform) => {setGameQuery({...gameQuery, platform})} } />
        <SortSelector selectedOrder={gameQuery.sortOrder} onSelectSortOrder={ (sortOrder) => {setGameQuery({...gameQuery, sortOrder})} } />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>      
  </Grid>
  )
}

export default App
