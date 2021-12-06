import { Container, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
const ProfileCard = () => {
  return (
    <Flex
      direction={"column"}
      bg={"#F1F1F1"}
      w={"50%"}
      ml={20}
      borderRadius={20}
      px={50}
      py={12}
    >
      <Text>
        <b>Sarah Ahmed,</b> volunteer
      </Text>
      <Text>
        “It has been an absolute pleasure to assist you. Your communication skills are excellent and you are simply a joy to be around!”
      </Text>
    </Flex>
  );
};

export default ProfileCard;
