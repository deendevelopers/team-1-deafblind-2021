import { IconButton } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Profile = () => {
    return (
        <React.Fragment>
            <Flex my={8} px={8}>
                <IconButton
                    aria-label='Call Segun'
                    size='lg'
                    my={4}
                    icon={<ArrowBackIcon/>}
                    borderRadius={100}
                    />
                    <Spacer/>
                    <Button px={10} borderRadius={10} position={'absolute'} transform={'auto'} translateX={5} right={'0'} my={8}>Connect</Button>
            </Flex>
            <Flex px={8}>
                <Box boxSize='sm' pr={4} w={36}>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <Text>
                    Name Surename
                </Text>
            </Flex>
            <Flex direction={'column'} px={6} mt={-52}>
                <Text as="u" mb={4}>
                    Basic information:
                </Text>
                <Flex >
                    <Text mr={4}>
                        Gender: 
                    </Text>
                    <Text>
                        Male
                    </Text>
                </Flex>
                <Flex>
                    <Text mr={4}>
                        Age: 
                    </Text>
                    <Text>
                        43
                    </Text>
                </Flex>
                <Flex>
                    <Text mr={4}>
                        Location: 
                    </Text>
                    <Text>
                        London, United Kingdom
                    </Text>
                </Flex>
            </Flex>
            <Flex direction={'column'} px={6} mt={8}>
                <Text as='u' mb={4}>
                    Interest: 
                </Text>
                <UnorderedList>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
            </Flex>
            <Flex direction='column' px={6} mt={8}>
                <Text as='u' mb={4}>
                    Suggested List:
                </Text>
                <Flex>
                <Box boxSize='sm' pr={4} w={36}>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <Box boxSize='sm' pr={4} w={36}>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <Box boxSize='sm' pr={4} w={36}>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                </Flex>
            </Flex>
        </React.Fragment>
        
    );
};

export default Profile;