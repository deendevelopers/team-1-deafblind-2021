import { useState } from 'react';
import { useNavigate } from 'react-router';
import Avatar from '../components/AvatarPro';
import { useAuthContext } from '../hooks/useAuthContext';
import './ProfileVolunteerForm.css';


export default function ProfileVolunteerForm() {
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [interests, setInterests] = useState('');
    const [peopleHelped, setHelpedPeople] = useState(0);


    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/profile")
    }

    return (
        <>
        <h2>Hello {user && user.displayName}!</h2>
        <p>Please complete the below profile form to set up your profile:</p>

        <form className="auth-form">
        <h3>Volunteer Form</h3>
        {user && <Avatar src={user.photoURL}/>}
        <br/>
        <div class="control">
         <label for="name">Full name</label>
         <input id="name" maxlength="20" type="text" />
        </div>
        <div class="control">
         <label htmlFor="biography">Bio</label>
         <textarea 
         id="biography"
         onChange={(e) => setBio(e.target.value)}
         value={bio}
         required></textarea>
        </div>
        <div class="control">
         <label htmlFor="age">Age</label>
         <input 
         id="age" 
         type="number"
         onChange={(e) => setAge(e.target.value)}
         value={age} />
        </div>
       <div class="control">
           <label htmlFor="location">Location</label>
           <input 
           id="location" 
           type="text" 
           onChange={(e) => setLocation(e.target.value)}
           value={location} />
        </div>
        <fieldset>
            <legend>Skills</legend>
            <div class="control">
                <input id="knows_sign_language" type="checkbox" />
                <label htmlFor="knows_sign_language">Knows Sign language</label>
            </div>
            <div class="control">
                <input id="help_with_admin" type="checkbox" />
                <label htmlFor="help_with_admin">Can help with admin stuff</label> 
            </div>
            <div class="control">
                <input id="can cook" type="checkbox" />
                <label hmtlFor="can_cook">Can cook meals</label>
            </div>
         </fieldset>
          <div class="control">
            <label htmlFor="interests">Interests</label>
            <textarea 
            id="interests"
            onChange={(e) => setInterests(e.target.value)}
            value={interests}
            required></textarea>
        </div>
        <div class="control">
            <input id="accept_agbs" type="checkbox" />
            <label htmlFor="accept_agbs">I accept the terms and conditions</label>
            </div>
            <div class="control">
                <button 
                type="submit"
                onSubmit={handleSubmit}>Create Profile</button>
            </div>
        </form>
        </>
        )
}
