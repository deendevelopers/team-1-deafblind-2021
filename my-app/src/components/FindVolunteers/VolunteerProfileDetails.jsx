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
  const allVolunteers =  [
    {
      name: "Lee Smith",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
      image: 'Lee-Smith.svg'
    },
    {
      name: "Marvin Davis",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Sketching', 'Painting', 'Camping', 'Mountain climbing'],
      image: 'Marvin-Davis.svg'
    },
    {
      name: "Mary Alexander",
      location: "London, United Kingdom",
      skills: [ "Car owner"],
      interests: ['Books', 'Tea', 'Plants', 'Pilates'],
      image: 'Mary-Alexander.svg'
    },
    {
      name: "Sameer Jain",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ['Technology', 'Football', 'Literature', 'Coffee'],
      image: 'Sameer-Jain.svg'
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Reading", "Gardening", "Cooking"],
    },
    {
      name: "Peter O'Connor",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ['Shopping', 'Fashion', 'Literature', 'Plants'],
      image: 'Peter-Oconnor.svg'
    },
    {
      name: "Jonathan Deltevosky",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Mountain climbing', 'Aerobics', 'Literature'],
      image: 'Jonathan-Deltevosky.svg'
    },
  ];
  console.log("volunteer name:", props.volunteerName);
  return (
    <Container maxW={"container.xl"} my={8}>
      <Grid templateColumns="repeat(2, 1fr)">
        {allVolunteers.map((volunteer) => {
          if (volunteer.name == props.volunteerName)
            return (
              <GridItem colSpan={1} m={3}>

             
              <Flex direction={"column"} w={"100%"}>
                <Flex px={8}>
                  <Box boxSize="sm" pr={4} w={36}>
                    <Image
                      size={"xl"}
                      src={volunteer.image}
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
                    <Button colorScheme="teal" bg="#000000" color="white" mt={5}>
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
                        m="1" colorScheme="purple" variant="solid"
                        >
                          {interest}
                        </Badge>
                      );
                    })}
                  </Stack>
                </Flex>
              </Flex>
              </GridItem>
            );
        })}

        <GridItem colSpan={1}>
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
              “What a wonderful helper!! I felt so comfortable. Not only did I get help with my travels but I have made a lifelong friend!”
              <br></br>
              Experience rating: 
              <br></br>
              <Image src='star-rating.svg' alt='star rating' mt={1}/>
            </Text>
          </Flex>
            <Image src='helped.svg' m={5}/>
            <Image src='reviews.svg' m={5}/>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default VolunteerProfileDetails;
