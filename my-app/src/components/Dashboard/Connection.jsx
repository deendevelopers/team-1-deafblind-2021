import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem } from '@chakra-ui/react'
import { useAuthContext } from "../../hooks/useAuthContext";
import Users from './Users';

const Connection = () => {
  const { user } = useAuthContext();

  return (
      <Grid templateColumns='repeat(4, 1fr)'>
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
