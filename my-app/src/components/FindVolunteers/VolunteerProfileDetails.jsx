import { Button } from "@chakra-ui/button";
import { Badge, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";

const VolunteerProfileDetails = (props) => {
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
      interests: ["Sketching", "Painting", "Camping", "Mountain climbing"],
    },
    {
      name: "Mary Alexander",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ["Books", "Tea", "Plants", "Pilates"],
    },
    {
      name: "Sameer Jain",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, "],
      interests: ["Technology", "Football", "Literature", "Coffee"],
    },
    {
      name: "Peter O'Connor",
      location: "London, United Kingdom",
      skills: ["Car owner"],
      interests: ["Shopping", "Fashion", "Literature", "Plants"],
    },
    {
      name: "Jonathan Deltevosky",
      location: "London, United Kingdom",
      skills: ["Sign language proficiency, ", "Car owner"],
      interests: ["Mountain climbing", "Aerobics", "Literature"],
    },
  ];
  console.log("volunteer name:", props.volunteerName);
  return (
    <Grid templateColumns="repeat(3, 1fr)">

          {allVolunteers.map((volunteer) => {
            if (volunteer.name == props.volunteerName)
              return (
                <GridItem colSpan={2} m={5}>
                  <Heading size='2xl' m={5}>{volunteer.name}</Heading>
                  <Button colorScheme='teal' bg='#000000' color='white' m={5}>Send connection request</Button>
                  <Heading  as='h3' size='lg' m={5}>Basic Information:</Heading>
                  <Heading as='h3' size='md' m={5}>Location</Heading>
                  <Text m={5}>{volunteer.location}</Text>
                  <Heading as='h3' size='md' m={5}>Bio</Heading>
                  <Text m={5}>Hi! My name is {volunteer.name}. I am a carer for my deaf son and like to extend and share my skills and experience where I can. Please feel free to connect with me</Text>
                  <Heading as='h3' size='md' m={5}>Skills</Heading>
                  <Text m={5}>{volunteer.skills}</Text>
                  <Heading as='h3' size='md' m={5}>Interests</Heading>
                  {volunteer.interests.map(interest => {return <Badge  m="1" colorScheme="purple" variant="solid">{interest}</Badge>} )}
                </GridItem>
              );
          })}

      <GridItem colSpan={1}>
      </GridItem>
    </Grid>
  );
};

export default VolunteerProfileDetails;
