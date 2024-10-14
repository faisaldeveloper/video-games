import React from 'react'
import { Card, Image, Text, CardBody, Heading, HStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList.jsx';
import CriticScore from './CriticScore.jsx';

const GameCard = ({game}) => {

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} alt='image'></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>  
  )
}

export default GameCard