import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = ({onSearch}) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px' alt='logo' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar