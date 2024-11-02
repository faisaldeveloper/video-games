import { Menu, MenuButton, Button, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = ({onSelectSortOrder, selectedOrder}) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' }
    ];

    const currentSortOrder = sortOrders.find(order => order.value === selectedOrder);


  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}        
        </MenuButton>
        <MenuList>
            {
              sortOrders.map((order, index) => {
                return (
                  <MenuItem onClick={() => onSelectSortOrder(order.value)} key={index} value={order.value}>{order.label}</MenuItem>
                )
              })
            }            
        </MenuList>
    </Menu>
  )
}

export default SortSelector