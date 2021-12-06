import VolunteerProfileDetails from "../components/FindVolunteers/VolunteerProfileDetails";
import { useParams } from "react-router-dom";

const VolunteerProfile = (props) => {
const {volunteer} =useParams()
return <VolunteerProfileDetails volunteerName={volunteer}/>
};

export default VolunteerProfile;