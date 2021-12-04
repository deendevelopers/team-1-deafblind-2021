import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem } from '@chakra-ui/react'
import Connections from "../components/Connections/Connections";
import Suggestions from "../components/Connections/Suggestions";

const Home = () => {
  return (
    <VStack>
        <Container maxW='container.xl'>
          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            <Connections />
          <Suggestions />
            
        </Grid>
        </Container>
       
    </VStack>
  );
};

export default Home;
