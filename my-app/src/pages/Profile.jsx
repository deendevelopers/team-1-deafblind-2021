import React from "react";
import './Profile.css'

const Profile = () => {
  return (
    <main>
    <div className="card">
        <div className="card-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWExi0XI71qBlLNnxKG6fCzDdyK5glNcU79A&usqp=CAU" className="profile-img"/>
        </div>
        <div className="card-body">
            <h2 className="full-name">Samantha Wheeler</h2>
            <p className="username">@samanthawheeler</p>
            <button className="btn-flat">Send Connection request</button>
            <h2 className="city">Location: London, UK</h2>
            <br/>
            <h2 className="desc">Bio: Hi my name is Samantha Lorem ipsum dolor sit amet</h2>
            <br/>
            <h2 className="desc">Needs: Sign Language Proficiency</h2>
            <br/>
       <p className="desc">Interests: Cycling, Art, Litterature, Nature</p>
            
        </div>
       
    </div>
    </main>
  );
};

export default Profile;
