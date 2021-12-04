import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem } from '@chakra-ui/react'
import Connections from "../components/Dashboard/Connections";
import Suggestions from "../components/Dashboard/Suggestions";
import Welcome from "../components/Dashboard/Welcome";

const Home = () => {
  return (
    <VStack>
        <Container maxW='container.xl'>
          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            <Box>
            <Welcome />
            <Connections />
            </Box>
            <Suggestions />
            
        </Grid>
        </Container>
       
    </VStack>
  );
};

export default Home;
