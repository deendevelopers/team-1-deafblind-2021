import { Container, Flex } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/layout";
const ProfileCard = () => {
    return (
            <Flex direction={'column'} bg={'#F1F1F1'} w={'50%'}  ml={20} borderRadius={20} px={50} py={12}>
                <Text>
                    <b>Sarah Ahmed,</b> volunteer
                </Text>
                <Text >
                “Susanne has been wonderful to help, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna dignissim laoreet.”
                </Text>
            </Flex>
    );
};

export default ProfileCard;