import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres.jsx'
import getCroppedImageUrl from '../services/image-url.jsx';


const GenresList = () => {
    const { data } = useGenres();

  return (
    <List>
        {data.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image boxSize='32px' borderRadius={8} 
                src={getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>                            
            </ListItem>
        ))}
    </List>
  )
}

export default GenresList