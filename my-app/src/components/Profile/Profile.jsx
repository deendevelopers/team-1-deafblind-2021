// import { Flex, Spacer } from "@chakra-ui/react";
// import { Box, Container } from "@chakra-ui/layout";
// import { Image } from "@chakra-ui/image";
// import { Text } from "@chakra-ui/react";
// import { List, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

import React from "react";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  IconButton,
  Badge,
  Flex,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const ProfileInfo = () => {
  return (
    <React.Fragment>
      <Flex direction={"column"} w={"100%"}>
        <Flex px={8}>
          <Box boxSize="sm" pr={4} w={36}>
            <Avatar
              size={"xl"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWExi0XI71qBlLNnxKG6fCzDdyK5glNcU79A&usqp=CAU"
              }
              alt={"avatar image"}
              mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
          </Box>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Samantha Wheeler
          </Heading>
        </Flex>
        <Flex direction={"column"} px={6} mt={-52}>
          <Flex justifyContent="space-between">
            <Text as="u">Basic Information</Text>
            <Box textAlign={"right"}>
              <IconButton aria-label="Edit profile" icon={<FaEdit />} />
            </Box>
          </Flex>

          <Flex w={400} justifyContent="space-between">
            <Box pr={8}>
              <Flex direction={"column"}>
                <Text mb={8}>Location</Text>
                <Text mb={8}>Bio</Text>
                <Text>Needs</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction={"column"}>
                <Text mb={8}>London, UK</Text>
                <Text mb={2}>
                  My name is Samantha, and Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Text>
                <List>
                  <ListItem>Sign language proficiency</ListItem>
                </List>
              </Flex>
            </Box>
          </Flex>
          <Stack align={"center"} direction={"row"} mt={6}>
            <Text>Interests</Text>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              Art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              Cycling
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              Nature
            </Badge>
          </Stack>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default ProfileInfo;

// <Center py={6}>
//   <Box
//     maxW={"320px"}
//     w={"full"}
//     bg={useColorModeValue("white", "gray.900")}
//     boxShadow={"2xl"}
//     rounded={"lg"}
//     p={6}
//     textAlign={"center"}
//   >
//     <Avatar
//       size={"xl"}
//       src={
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWExi0XI71qBlLNnxKG6fCzDdyK5glNcU79A&usqp=CAU"
//       }
//       alt={"Avatar Alt"}
//       mb={4}
//       pos={"relative"}
//       _after={{
//         content: '""',
//         w: 4,
//         h: 4,
//         bg: "green.300",
//         border: "2px solid white",
//         rounded: "full",
//         pos: "absolute",
//         bottom: 0,
//         right: 3,
//       }}
//     />

// <Heading fontSize={"2xl"} fontFamily={"body"}>
//   Samantha Wheeler
// </Heading>
//     <Text fontWeight={600} color={"gray.500"} mb={4}>
//       @samanthawheeler
//     </Text>
// <Box textAlign={"right"}>
//   <IconButton aria-label="Edit profile" icon={<FaEdit />} />
// </Box>
// <Text px={3} textAlign={"left"}>
//   Location: London, UK
// </Text>
// <Text
//   textAlign={"left"}
//   color={useColorModeValue("gray.700", "gray.400")}
//   px={3}
// >
//   Bio: Hi my name is Samantha
// </Text>
// <Text px={3} textAlign={"left"}>
//   Needs: Sign language proficiency
// </Text>

// <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
//   <Text>Interests:</Text>
//   <Badge
//     px={2}
//     py={1}
//     bg={useColorModeValue("gray.50", "gray.800")}
//     fontWeight={"400"}
//   >
//     Art
//   </Badge>
//   <Badge
//     px={2}
//     py={1}
//     bg={useColorModeValue("gray.50", "gray.800")}
//     fontWeight={"400"}
//   >
//     Cycling
//   </Badge>
//   <Badge
//     px={2}
//     py={1}
//     bg={useColorModeValue("gray.50", "gray.800")}
//     fontWeight={"400"}
//   >
//     Nature
//   </Badge>
// </Stack>

// <Stack mt={8} direction={"row"} spacing={4}>
//   <Button
//     flex={1}
//     fontSize={"sm"}
//     rounded={"full"}
//     _focus={{
//       bg: "gray.200",
//     }}
//   >
//     Message
//   </Button>
//   <Button
//     flex={1}
//     fontSize={"sm"}
//     rounded={"full"}
//     bg={"blue.400"}
//     color={"white"}
//     boxShadow={
//       "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
//     }
//     _hover={{
//       bg: "blue.500",
//     }}
//     _focus={{
//       bg: "blue.500",
//     }}
//   >
//     Connect
//   </Button>
// </Stack>
//   </Box>
// </Center>
