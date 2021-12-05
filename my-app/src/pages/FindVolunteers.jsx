import React from "react";
import { Grid, Box } from "@chakra-ui/layout";
import Suggestions from "../components/Dashboard/Suggestions";
import TaskSuggestions from "../components/FindVolunteers/TaskSuggesions";

const FindVolunteers = () => {
    return(
        <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            <Box>
                <TaskSuggestions/>
            </Box>
            <Box>
                <Suggestions/>
            </Box>
        </Grid>
    )
};

export default FindVolunteers;