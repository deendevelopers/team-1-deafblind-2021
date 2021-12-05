import { Flex } from "@chakra-ui/layout";
import React from "react";
import Profile from "../components/Profile/Profile";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileHeader from "../components/ProfileHeader";
import { Container } from "@chakra-ui/layout";
const ProfilePage = () => {
  return (
    <React.Fragment>
      <Container maxW={'container.xl'} my={8}>
        <main>
            <Flex justifyContent={'space-between'}>
              <Profile/>
              <ProfileCard/>
            </Flex>
        </main>
        </Container>
    </React.Fragment>
    
  );
};

export default ProfilePage;
