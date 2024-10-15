import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width='270px' height='280px'>
        <Skeleton />
        <CardBody>
            <SkeletonText />         
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton