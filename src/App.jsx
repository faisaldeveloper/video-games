import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar.jsx'
import GameGrid from './components/GameGrid.jsx'
import GenresList from './components/GenresList.jsx'


function App() {
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:    `"nav nav" "aside main"`}}
    >            
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
      <GridItem pl='2' bg='blue.300' area={'aside'}>
        <GenresList />
      </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <GameGrid />
      </GridItem>      
  </Grid>
  )
}

export default App
