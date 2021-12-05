import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem } from '@chakra-ui/react'
import Connections from "../components/Dashboard/Connections";
import Suggestions from "../components/Dashboard/Suggestions";
import Welcome from "../components/Dashboard/Welcome";


const Home = () => {
  const volunteers = [
    {
      name: "Kola Tioluwani",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency", "car owner"],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency", "car owner"],
      interests: ["Reading", "Gardening", "Cooking"],
    },
  ];
  return (
    <VStack>
        <Container maxW='container.xl'>
          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            <Box>
            <Welcome />
            <Connections />
            </Box>
            <Suggestions volunteers={volunteers} heading={'Here are some volunteer suggestions based on your profile!'}/>
            
        </Grid>
        </Container>
       
    </VStack>
  );
};

export default Home;
