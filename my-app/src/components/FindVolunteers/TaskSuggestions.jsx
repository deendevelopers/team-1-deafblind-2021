import React, { useState } from "react";
import {
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";

const TaskSuggestions = (props) => {
  const [tasks, setTasks] = useState([
    "shopping",
    "attending an event",
    "making a phone call",
    "travelling",
  ]);
  const handleClick = (task) => {
    console.log("I am being clicked and here is your task:", task);
    props.filterVolunteers(task);
  };
  return (
    <Center>
      <section>
        <Heading as="h3" size="lg" mt={10} mb={5}>
          What do you need help with today?
        </Heading>
        <Text size="md" mb="4" isTruncated>
          Select the task you need help with from the menu below.
        </Text>
        <Menu matchWidth="true" m="1" bg="gray.500">
          <MenuButton mt="5" as={Button} rightIcon=">">
            select a task
          </MenuButton>
          <MenuList m="1">
            {tasks.map((task) => {
              return (
                <MenuItem
                  onClick={() => {
                    handleClick(task);
                  }}
                >
                  {task}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Center>
          <Image
            src="macaroni-care-1.svg"
            alt="macaroni care"
            borderRadius="10"
          />
        </Center>
      </section>
    </Center>
  );
};

export default TaskSuggestions;
