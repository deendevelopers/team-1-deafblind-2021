import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem } from '@chakra-ui/react'
import Connection from "./Connection";

const Connections = () => {
  return (
    <GridItem w='100%' pb={10} pl={5} pr={5}>
      <Heading as='h3' size='lg'  mt={20} mb={5} >My connections</Heading>
     <Connection />
      <Center>
        <Button bg='#DA5B4F' color="white" size='lg' mt={10}>View all connections</Button>
      </Center>
    </GridItem>
  );
};

export default Connections;
