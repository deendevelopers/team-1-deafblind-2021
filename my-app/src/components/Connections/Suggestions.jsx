import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, Image } from '@chakra-ui/react'

const Suggestions = () => {
  return (
    <Box w='100%' bg='blue.100'>
    <Center>
      <Heading  as='h2' mt={10} mb={10}>Here are some volunteer suggestions based on your profile!</Heading>
    </Center>

    <Grid mb={5} templateColumns='repeat(1, 1fr)' gap={5} templateRows='repeat(3, 1fr)'>
              
                        <Center>
                    <Box>
                    <Center>
                    <Grid templateColumns='repeat(2, 1fr)' >
                    <Box>
                    <Center>
                    <Box boxSize='150px'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
                   
            
            </Center>
                </Box>
                <Center>
                <Box>
                 <Heading  as='h6' >Kola Tioluwani</Heading>
                <Text fontSize='lg'>London, United Kingdom</Text>
                <Text fontSize='lg'>Interests: Sketching, Cycling, Harry Potter, Italian food</Text>
                </Box>
                </Center>
                </Grid>
                </Center>
                    </Box>
                </Center>
              
        
       
                <Center>
                    <Box>
                    <Center>
                    <Grid templateColumns='repeat(2, 1fr)' >
                    <Box>
                    <Center>
                    <Box boxSize='150px'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
                   
            
            </Center>
                </Box>
                <Center>
                <Box>
                 <Heading  as='h6' >Kola Tioluwani</Heading>
                <Text fontSize='lg'>London, United Kingdom</Text>
                <Text fontSize='lg'>Interests: Sketching, Cycling, Harry Potter, Italian food</Text>
                </Box>
                </Center>
                </Grid>
                </Center>
                    </Box>
                </Center>
              
         

                <Center>
                    <Box>
                    <Center>
                    <Grid templateColumns='repeat(2, 1fr)' >
                    <Box>
                    <Center>
                    <Box boxSize='150px'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
                   
            
            </Center>
                </Box>
                <Center>
                <Box>
                 <Heading  as='h6' >Kola Tioluwani</Heading>
                <Text fontSize='lg'>London, United Kingdom</Text>
                <Text fontSize='lg'>Interests: Sketching, Cycling, Harry Potter, Italian food</Text>
                </Box>
                </Center>
                </Grid>
                </Center>
                    </Box>
                </Center>
              
      
              
              </Grid>
              
             
              <Center>
    <Button colorScheme='pink' size='lg'>View all volunteer suggestions</Button>
    </Center>
  </Box>
  );
};

export default Suggestions;
