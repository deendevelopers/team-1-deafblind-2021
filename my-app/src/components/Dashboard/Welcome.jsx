import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import {
  Heading,
  Button,
  Center,
  Avatar,
  Text,
  GridItem,
  Container,
  Grid,
  Image,
  Flex,
} from "@chakra-ui/react";

const Welcome = () => {
  const { user } = useAuthContext();
  return (
    <GridItem w="100%" mb={10} pb={5} pl={6} pr={5}>
      <Heading as="h3" mt={10} mb={10}>
        Hello {user && user.displayName}!
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={1} h="10">
          <Center>
          <Image src="notification-bell.svg" alt="notification bell" />
          </Center>
        </GridItem>
        <GridItem colStart={2} colEnd={6} h="10">
          <Text bg="papayawhip" borderRadius="10" p={5}>
          Charlie has accepted your connection request! Send them a message.
          </Text>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default Welcome;
