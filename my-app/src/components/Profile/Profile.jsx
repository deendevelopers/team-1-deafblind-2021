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
                <Flex>
                    <Text as="u" mb={8}>
                       <b> Basic information:</b>
                    </Text>
                    <Spacer/>
                    <Box>
                        <Text as="u" >
                            edit personal information
                        </Text>
                    </Box>
                </Flex>
                <Flex>
                    <Text mr={8}>
                        Location
                    </Text>
                    <Text>
                        London, United Kingdom
                    </Text>
                </Flex>
                <Flex >
                    <Text mr={16}>
                        Bio
                    </Text>
                    <Text>
                        Lorem Ipsum
                    </Text>
                </Flex>
                
            </Flex>
            <Flex px={6} mt={8}>
                <Text mb={4} mr={12}>
                    Needs 
                </Text>
                <List>
                    <ListItem>
                        <ListIcon as={FaSignLanguage}/>
                        Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </List>
            </Flex>
            <Flex px={6} my={4}>
                <Text mr={8}>
                    Interests
                </Text>
                <Box>
                    <Tag mr={4}>Cycling</Tag>
                    <Tag>etc</Tag>
                </Box>
            </Flex>
            </Flex>
        </React.Fragment>
        
    );
};

export default Profile;