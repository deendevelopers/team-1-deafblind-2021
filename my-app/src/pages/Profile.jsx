import React from "react";

import { Flex, Container } from "@chakra-ui/layout";
import ProfileInfo from "../components/Profile/Profile";
import ProfileCard from "../components/Profile/ProfileCard";

const Profile = () => {
  return (
    <React.Fragment>
      <Container maxW={"container.xl"} my={8}>
        <main>
          <Flex justifyContent={"space-between"}>
            <ProfileInfo />
            <ProfileCard />
          </Flex>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
