import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem } from '@chakra-ui/react'

const Home = () => {
  return (
    <VStack>
        <Container maxW='container.xl'>
          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
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
              
              <Button colorScheme='pink' size='lg'>View all connections</Button>
            </Box>
          
            <Box w='100%' bg='blue.100'>
              <Center>
                <Heading  as='h2' mt={10} mb={10}>Here are some volunteer suggestions based on your profile!</Heading>
              </Center>
         
              <Button colorScheme='pink' size='lg'>View all volunteer suggestions</Button>
            </Box>
        </Grid>
        </Container>
       
    </VStack>
  );
};

export default Home;
