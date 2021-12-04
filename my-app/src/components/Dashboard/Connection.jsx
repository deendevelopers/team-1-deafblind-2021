import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem } from '@chakra-ui/react'

const Connection = () => {
  return (
      <Grid templateColumns='repeat(3, 1fr)'>
        <Center> 
          <Box>
          <Center>
            <Avatar
            bg="#D8D8D8"
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
             </Center>
            <Text mt={1} fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center>
        <Center> 
          <Box>
          <Center>
            <Avatar
            bg="#D8D8D8"
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
             </Center>
            <Text fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center>
        <Center> 
          <Box>
          <Center>
            <Avatar
            bg="#D8D8D8"
                  size='lg'
                  name='Kola Tioluwani'
                  src='https://bit.ly/tioluwani-kolawole'
            />
             </Center>
            <Text fontSize='lg'>Kola Tioluwani</Text>
          </Box>
        </Center> 
      </Grid>
  );
};

export default Connection;
