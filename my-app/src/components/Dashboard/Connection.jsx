import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem, Stack } from '@chakra-ui/react'

const Connection = () => {
  const connections = [{name: 'Yawar Choudhury', initials: 'YC'}, {name: 'Ahmed Javed', initials: 'AJ'}, {name: 'Eleanor Vandorf', initials: 'EV'}, {name: 'Irene Harf', initials: 'IF'}]
  return (
      <Grid templateColumns='repeat(4, 1fr)'>
        {connections.map(connection => {
          return (
            <Center> 
            <Box>
            <Center>
              <Avatar
              bg="#D8D8D8"
                    size='lg'
                    name={connection.name}

              /> 
               </Center>
              <Text mt={1} fontSize='lg'>{connection.name}</Text>
            </Box>
          </Center>
          )
        })}
      </Grid>
  );
};

export default Connection;
