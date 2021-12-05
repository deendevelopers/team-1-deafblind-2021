import { Flex,  } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import logo from '../assets/logo.png';
import { IconButton } from "@chakra-ui/button";
import { FaHome } from "react-icons/fa";
const ProfileHeader = () => {
    return (
       
            <header>
                <Flex my={8}>
                            <Image src={logo} alt='Logo' h={10}/>
                        <Text mr={600}>
                            Spectro
                        </Text>
                    <Flex>
                        <IconButton aria-label='Home' icon={<FaHome/>} mr={4}>
                            Home
                        </IconButton>
                        <Button mr={4}>
                            Find Volunteers
                        </Button>
                        <Button mr={4}>
                            My PRofile
                        </Button>
                        <Button>
                            Notifications
                        </Button>
                    </Flex>
                </Flex>
            </header>
        
    )
};

export default ProfileHeader;