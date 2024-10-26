import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpeg'
import ColorModeSwitch from './ColorModeSwitch'


const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' alt='logo' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar