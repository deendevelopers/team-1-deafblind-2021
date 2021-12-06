import React from "react";
import { Container, VStack, Grid, Box, Heading, Center, Button, Avatar, Text, GridItem, Stack } from '@chakra-ui/react'

const Connection = () => {
  const connections = [{name: 'Yawar Choudhury', initials: 'YC', image: 'Yawar-Choudhury.svg'}, {name: 'Ahmed Javed', initials: 'AJ', image: 'Ahmed-Javed.svg'}, {name: 'Eleanor Vandorf', initials: 'EV', image: 'Eleanor-Vandorf.svg'}, {name: 'Irene Harf', initials: 'IF', image: 'Irene-Harf.svg'}]
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
                    src={connection.image}
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
