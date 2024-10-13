import React from 'react'
import { Card, Image, Text, CardBody, Heading } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList.jsx';

const GameCard = ({game}) => {

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} alt='image'></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms} />
        </CardBody>
    </Card>  
  )
}

export default GameCard