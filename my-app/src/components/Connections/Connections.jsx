import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem } from '@chakra-ui/react'

const Connections = () => {
  return (
    <Box w='100%' bg='blue.100'>
              <Center>
                <Heading as='h2'  mt={10} mb={10} >My connections</Heading>
              </Center>

              <Grid mb={5} templateColumns='repeat(3, 1fr)'>
                  <Center> 
                    <Box>
                    <Avatar
                  size='xl'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
                />
                <Text fontSize='lg'>Kola Tioluwani</Text>
                    </Box>
                  </Center>
        
            <Center> 
              <Box>
                <Avatar
                  size='xl'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
                />
                <Text fontSize='lg'>Kola Tioluwani</Text>
            </Box>
            </Center>
            <Center> 
              <Box>
                <Avatar
                  size='xl'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
                />
                <Text fontSize='lg'>Kola Tioluwani</Text>
            </Box>
            </Center>
              
              </Grid>
              <Center>
              <Button colorScheme='pink' size='lg'>View all connections</Button>
          </Center>
            </Box>
  );
};

export default Connections;
