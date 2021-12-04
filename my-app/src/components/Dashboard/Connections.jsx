import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem } from '@chakra-ui/react'

const Connections = () => {
  return (
    <GridItem w='100%' pb={10} pl={5} pr={5}>
      <Heading as='h3' mt={10} mb={10} >My connections</Heading>
      <Grid templateColumns='repeat(3, 1fr)'>
        <Center> 
          <Box>
            <Avatar
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
            <Text fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center>
        <Center> 
          <Box>
            <Avatar
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
            <Text fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center>
        <Center> 
          <Box>
            <Avatar
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
            <Text fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center> 
      </Grid>
      <Center>
        <Button bg='#DA5B4F' color="white" size='lg' mt={10}>View all connections</Button>
      </Center>
    </GridItem>
  );
};

export default Connections;
