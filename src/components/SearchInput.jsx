import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { useRef } from 'react'


const SearchInput = ({onSearch}) => {
    const searchInput = useRef('');


  return (
    <form onSubmit={ (event) => {
        event.preventDefault();
        if(searchInput.current) onSearch(searchInput.current.value);

    }} >
    <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={searchInput} borderRadius={20} placeholder='Search Games...' variant='filled' />
    </InputGroup>
    </form>
  )
}

export default SearchInput