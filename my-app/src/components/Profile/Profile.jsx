import { Button, ButtonGroup, ListIcon } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/react';
import {
    List,
    ListItem,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react';
  import { Tag } from '@chakra-ui/tag';
import React from 'react';
import { FaSignLanguage } from 'react-icons/fa';
const Profile = () => {
    return (
        <React.Fragment>
            <Flex direction={'column'} w={'100%'}>
            <Flex px={8}>
                <Box boxSize='sm' pr={4} w={36}>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <Text>
                    Name Surename
                </Text>
            </Flex>
            <Flex direction={'column'} px={6} mt={-52}>
                <Flex justifyContent="space-between">
                    <Text as="u">
                        Basic infromation
                    </Text>
                    <Text>
                    Edit personal information
                    </Text>
                </Flex>
                <Flex w={400} justifyContent="space-between">
                <Box pr={8}>
                    <Flex direction={'column'}>
                        <Text mb={8}>
                            Location
                        </Text>
                        <Text mb={8}>
                            Bio
                        </Text>
                        <Text>
                            Needs
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction={'column'}>
                        <Text mb={8}>
                            United Kingdom, London
                        </Text>
                        <Text mb={8}>
                        

My name is Susanne, and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna dignissim laoreet tellus quis sit a dictumst. Aliquet amet phasellus sodales cursus varius pharetra.

         Sign language profiency

         Going to public events

         Going shopping         


                        </Text>
                        <List>
                            <ListItem>

                            </ListItem>
                        </List>
                    </Flex>
                </Box>
                </Flex>
                </Flex>
            </Flex>
        </React.Fragment>
        
    );
};

export default Profile;