import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar.jsx'
import GameGrid from './components/GameGrid.jsx'
import GenresList from './components/GenresList.jsx'
import { useState } from 'react'


function App() {

  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:    `"nav nav" "aside main"`}}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
    >            
      <GridItem area={'nav'}> ** {selectedGenre ? selectedGenre.name + ' Genres' : 'All Genres'}
        <NavBar />
      </GridItem>
      <Show above="lg">
      <GridItem pl='2' bg='grey.300' area={'aside'} paddingX={5}>
        <GenresList selectedGenre={selectedGenre} onSelectGenre={ (genre) => { setSelectedGenre(genre)} } />
      </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>      
  </Grid>
  )
}

export default App
