import React,  { useState } from "react";
import { Heading , Text, Menu, MenuButton, MenuItem, MenuList, Button, Center} from "@chakra-ui/react";

const TaskSuggestions = (props) => {
    const [tasks, setTasks] = useState(['shopping', 'attending an event', 'making a phone call', 'travelling'])
    const handleClick = (task) => {console.log('I am being clicked and here is your task:', task); props.filterVolunteers(task)}
    return (
        <Center>
            <section>
                <Heading as='h3' size='lg'  mt={10} mb={5}>What do you need help with today?</Heading>
                <Text size='md' isTruncated>Select the task you need help with from the menu below.</Text>
                <Menu matchWidth='true' mt={10}>
                    <MenuButton as={Button} rightIcon='>'>
                        select a task
                    </MenuButton>
                    <MenuList>
                        {tasks.map(task => {
                            return(
                                <MenuItem onClick={() => {handleClick(task)}}>{task}</MenuItem>
                                )
                            })}
                    </MenuList>
                </Menu>
            </section>
        </Center>
    )
};


export default TaskSuggestions;