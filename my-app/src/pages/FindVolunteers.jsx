import React, { useState } from "react";
import { Grid, Box } from "@chakra-ui/layout";
import Suggestions from "../components/Dashboard/Suggestions";
import TaskSuggestions from "../components/FindVolunteers/TaskSuggestions";

const FindVolunteers = () => {
  const [volunteers, setVolunteers] = useState({
    volunteers:  [
      {
        name: "Lee Smith",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency, "],
        interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
        image: 'Lee-Smith.svg'
      },
      {
        name: "Marvin Davis",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency, ", "Car owner"],
        interests: ['Sketching', 'Painting', 'Camping', 'Mountain climbing'],
        image: 'Marvin-Davis.svg'
      },
      {
        name: "Mary Alexander",
        location: "London, United Kingdom",
        skills: [ "Car owner"],
        interests: ['Books', 'Tea', 'Plants', 'Pilates'],
        image: 'Mary-Alexander.svg'
      },
      {
        name: "Sameer Jain",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency, "],
        interests: ['Technology', 'Football', 'Literature', 'Coffee'],
        image: 'Sameer-Jain.svg'
      },
      {
        name: "Sarah Ashfield",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency, "],
        interests: ["Reading", "Gardening", "Cooking"],
      },
      {
        name: "Peter O'Connor",
        location: "London, United Kingdom",
        skills: ["Car owner"],
        interests: ['Shopping', 'Fashion', 'Literature', 'Plants'],
        image: 'Peter-Oconnor.svg'
      },
      {
        name: "Jonathan Deltevosky",
        location: "London, United Kingdom",
        skills: ["Sign language proficiency, ", "Car owner"],
        interests: ['Mountain climbing', 'Aerobics', 'Literature'],
        image: 'Jonathan-Deltevosky.svg'
      },
    ],
  });
  const allVolunteers =  [
    {
      name: "Lee Smith",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Sketching", "Cycling", "Harry Potter", "Italian food"],
      image: 'Lee-Smith.svg'
    },
    {
      name: "Marvin Davis",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Sketching', 'Painting', 'Camping', 'Mountain climbing'],
      image: 'Marvin-Davis.svg'
    },
    {
      name: "Mary Alexander",
      location: "London, United Kingdom",
      skills: [ "Car owner"],
      interests: ['Books', 'Tea', 'Plants', 'Pilates'],
      image: 'Mary-Alexander.svg'
    },
    {
      name: "Sameer Jain",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ['Technology', 'Football', 'Literature', 'Coffee'],
      image: 'Sameer-Jain.svg'
    },
    {
      name: "Sarah Ashfield",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Reading", "Gardening", "Cooking"],
    },
    {
      name: "Peter O'Connor",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ['Shopping', 'Fashion', 'Literature', 'Plants'],
      image: 'Peter-Oconnor.svg'
    },
    {
      name: "Jonathan Deltevosky",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ['Mountain climbing', 'Aerobics', 'Literature'],
      image: 'Jonathan-Deltevosky.svg'
    },
  ];
  const filterVolunteers = (task) => {
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
