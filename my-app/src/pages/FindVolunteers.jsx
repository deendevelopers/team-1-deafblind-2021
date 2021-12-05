import React, { useState } from "react";
import { Grid, Box } from "@chakra-ui/layout";
import Suggestions from "../components/Dashboard/Suggestions";
import TaskSuggestions from "../components/FindVolunteers/TaskSuggestions";

const FindVolunteers = () => {
  const [volunteers, setVolunteers] = useState({
    volunteers: [
      {
        name: "Kola Tioluwani",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency ", "Car owner"],
        interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
      },
      {
        name: "Sarah Ashfield",
        location: "London, United Kingdom",
        skills: ["Car owner"],
        interests: ["Reading", "Gardening", "Cooking"],
      },
    ],
  });
  const allVolunteers = [
    {
      name: "Kola Tioluwani",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency ", "Car owner"],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ["Reading", "Gardening", "Cooking"],
    },
  ];
  const filterVolunteers = (task) => {
    const filteredVolunteers = allVolunteers.filter((volunteer) => {
      return volunteer.skills.includes("Sign language proficiency ");
    });
    setVolunteers({ volunteers: filteredVolunteers });
  };
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <Box>
        <TaskSuggestions filterVolunteers={filterVolunteers} />
      </Box>
      <Box>
        <Suggestions volunteers={volunteers.volunteers} heading={'Here are some skilled volunteers ready to help you with your task!'}/>
      </Box>
    </Grid>
  );
};

export default FindVolunteers;
