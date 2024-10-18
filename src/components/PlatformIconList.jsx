import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from '@chakra-ui/react';

const PlatformIconList = ({platforms}) => {
    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }


  return (
    <HStack marginY={2}>
    {platforms.map(({platform}) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)
    }  
    </HStack>
)
}

export default PlatformIconList