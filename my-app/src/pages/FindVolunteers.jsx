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
          skills: ["Sign language proficiency, ", "Car owner"],
          interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
        },
        {
          name: "Sarah Ashfield",
          location: "London, United Kingdom",
          skills: ["Car owner"],
          interests: ["Reading", "Gardening", "Cooking"],
        },
        {
          name: "Marvin Davis",
          location: "London, United Kingdom",
          skills: ["Sign language proficiency, ", "Car owner"],
          interests: ['Sketching', 'Painting', 'Camping', 'Mountain climbing'],
        },
        {
          name: "Mary Alexander",
          location: "London, United Kingdom",
          skills: [ "Car owner"],
          interests: ['Books', 'Tea', 'Plants', 'Pilates'],
        },
        {
          name: "Sameer Jain",
          location: "London, United Kingdom",
          skills: ["Sign language proficiency, ", "Car owner"],
          interests: ['Technology', 'Football', 'Literature', 'Coffee'],
        },
        {
          name: "Peter O'Connor",
          location: "London, United Kingdom",
          skills: ["Car owner"],
          interests: ['Shopping', 'Fashion', 'Literature', 'Plants'],
        },
        {
          name: "Jonathan Deltevosky",
          location: "London, United Kingdom",
          skills: ["Sign language proficiency, ", "Car owner"],
          interests: ['Mountain climbing', 'Aerobics', 'Literature'],
        },
      
    ],
  });
  const allVolunteers = [
    {
      name: "Kola Tioluwani",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Reading", "Gardening", "Cooking"],
    },
    {
      name: "Marvin Davis",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Sketching', 'Painting', 'Camping', 'Mountain climbing'],
    },
    {
      name: "Mary Alexander",
      location: "London, United Kingdom",
      skills: [ "Car owner"],
      interests: ['Books', 'Tea', 'Plants', 'Pilates'],
    },
    {
      name: "Sameer Jain",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ['Technology', 'Football', 'Literature', 'Coffee'],
    },
    {
      name: "Peter O'Connor",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ['Shopping', 'Fashion', 'Literature', 'Plants'],
    },
    {
      name: "Jonathan Deltevosky",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Mountain climbing', 'Aerobics', 'Literature'],
    },
  ];
  const filterVolunteers = (task) => {
    console.log(task)
    const filteredVolunteers = allVolunteers.filter((volunteer) => {
      if(task === "making a phone call") return volunteer.skills.includes("Sign language proficiency, ")
      return volunteer.skills.includes("Car owner");
    });
    setVolunteers({ volunteers: filteredVolunteers });
  };
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <Box>
        <TaskSuggestions filterVolunteers={filterVolunteers} />
      </Box>
      <Box>
        <Suggestions volunteers={volunteers.volunteers} heading={'Here are some skilled volunteers ready to help you with this task!'}/>
      </Box>
    </Grid>
  );
};

export default FindVolunteers;
