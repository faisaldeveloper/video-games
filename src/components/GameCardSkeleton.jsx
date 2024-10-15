import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow='hidden' width='270px' height='310px'>
        <Skeleton />
        <CardBody>
            <SkeletonText />         
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton