import { HStack, List, ListItem, Image, Button, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres.jsx'
import getCroppedImageUrl from '../services/image-url.jsx';


const GenresList = ({ onSelectGenre }) => {
    const { data, isLoading, error } = useGenres();

    if(error) return null;
    if(isLoading) return <Spinner />

  return (
    <List>
        {data.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image boxSize='32px' borderRadius={8} 
                src={getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
              </HStack>                            
            </ListItem>
        ))}
    </List>
  )
}

export default GenresList