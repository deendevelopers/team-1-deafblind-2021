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
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const VolunteerProfileDetails = (props) => {
  const allVolunteers = [
    {
      name: "Kola Tioluwani",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency"],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency", "Cooking"],
      interests: ["Reading", "Gardening", "Cooking"],
    },
    {
      name: "Marvin Davis",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency", "Car owner"],
      interests: ["Sketching", "Painting", "Camping", "Mountain climbing"],
    },
    {
      name: "Mary Alexander",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ["Books", "Tea", "Plants", "Pilates"],
    },
    {
      name: "Sameer Jain",
      location: "London, United Kingdom",
      skills: ["BSL", "Car owner"],
      interests: ["Technology", "Football", "Literature", "Coffee"],
    },
    {
      name: "Peter O'Connor",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ["Shopping", "Fashion", "Literature", "Plants"],
    },
    {
      name: "Jonathan Deltevosky",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency", "Car owner"],
      interests: ["Mountain climbing", "Aerobics", "Literature"],
    },
  ];
  console.log("volunteer name:", props.volunteerName);
  return (
    <Container maxW={"container.xl"} my={8}>
      <Grid templateColumns="repeat(3, 1fr)">
        {allVolunteers.map((volunteer) => {
          if (volunteer.name == props.volunteerName)
            return (
              <Flex direction={"column"} w={"100%"}>
                <Flex px={8}>
                  <Box boxSize="sm" pr={4} w={36}>
                    <Image
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
                  <Flex direction={"column"}>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {volunteer.name}
                    </Heading>
                    <Button colorScheme="teal" bg="#000000" color="white" m={5}>
                      Send connection request
                    </Button>
                  </Flex>
                </Flex>

                <Flex direction={"column"} px={6} mt={-52}>
                  <Flex justifyContent="space-between">
                    <Text as="u">Basic Information</Text>
                  </Flex>
                  <Flex w={400} justifyContent="space-between">
                    <Box pr={8}>
                      <Flex direction={"column"}>
                        <Text mb={8}>Location</Text>
                        <Text mb={120}>Bio</Text>
                        <Text>Skills</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex direction={"column"}>
                        <Text mb={8}>{volunteer.location}</Text>
                        <Text mb={10}>
                          Hi! My name is {volunteer.name}. I am a carer for my
                          deaf son and like to extend and share my skills and
                          experience where I can. Please feel free to connect
                          with me
                        </Text>
                        <List>
                          {volunteer.skills.map((skill) => {
                            return <ListItem>{skill}</ListItem>;
                          })}
                        </List>
                      </Flex>
                    </Box>
                  </Flex>
                  <Stack align={"center"} direction={"row"} mt={6}>
                    <Text>Interests</Text>
                    {volunteer.interests.map((interest) => {
                      return (
                        <Badge
                          px={2}
                          py={1}
                          fontWeight={"400"}
                          colorScheme="purple"
                          variant="solid"
                        >
                          {interest}
                        </Badge>
                      );
                    })}
                  </Stack>
                </Flex>
              </Flex>
            );
        })}

        <GridItem colSpan={2}>
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
              <b>Sarah Ahmed,</b> Spectro user
            </Text>
            <Text>
              “They has been wonderful as a helper, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Urna dignissim laoreet.”
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default VolunteerProfileDetails;
