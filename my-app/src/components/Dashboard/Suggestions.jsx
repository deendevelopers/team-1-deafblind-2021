import React, { useState } from "react";
import {
  Container,
  GridItem,
  Grid,
  Box,
  Heading,
  Button,
  Center,
  Avatar,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";

const Suggestions = (props) => {
  return (
    <GridItem rowSpan={2} w="100%" pb={10} pl={5}>
      <Center>
        <Heading as="h3" size="lg" mt={10} mb={5}>
          Here are some volunteer suggestions based on your profile!
        </Heading>
      </Center>

      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={10}
        templateRows="repeat(3, 1fr)"
      >
        {props.volunteers.map((volunteer) => {
          return (
            // <Center>
              <Box>
                {/* <Center> */}
                  <Grid templateColumns="repeat(2, 1fr)">
                    <Box>
                      {/* <Center> */}
                        <Box boxSize="125px">
                          <Image
                            src="https://bit.ly/dan-abramov"
                            alt="Dan Abramov"
                            borderRadius="10"
                          />
                        </Box>
                      {/* </Center> */}
                    </Box>
                    {/* <Center> */}
                      <Box>
                        <Heading as="h6" size="md">
                          {volunteer.name}
                        </Heading>
                        <Text fontSize="lg" mt={2}>
                          {volunteer.location}
                        </Text>
                        <Text>Skills: {volunteer.skills}</Text>
                        {volunteer.interests.map((interest) => {
                          console.log(interest);
                          return <Badge m='1' colorScheme="purple" variant="solid">
                            {interest}
                          </Badge>;
                        })}
                      </Box>
                    {/* </Center> */}
                  </Grid>
                {/* </Center> */}
              </Box>
            // </Center>
          );
        })}

        {/* <Center>
          <Box>
            <Center>
              <Grid templateColumns="repeat(2, 1fr)">
                <Box>
                  <Center>
                    <Box boxSize="125px">
                      <Image
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                        borderRadius="10"
                      />
                    </Box>
                  </Center>
                </Box>
                <Center>
                  <Box>
                    <Heading as="h6" size="md">
                      Kola Tioluwani
                    </Heading>
                    <Text fontSize="lg" mt={2}>
                      London, United Kingdom
                    </Text>
                    <Text fontSize="lg" mt={2}>
                      Interests: Sketching, Cycling, Harry Potter, Italian food
                    </Text>
                  </Box>
                </Center>
              </Grid>
            </Center>
          </Box>
        </Center> */}
      </Grid>

      <Center>
        <Button bg="#DA5B4F" color="white" size="lg" mt={10}>
          View all volunteer suggestions
        </Button>
      </Center>
    </GridItem>
  );
};

export default Suggestions;
