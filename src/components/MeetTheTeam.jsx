import React from "react";
import "../css/Team.css"
import { teamMembers } from "../css/TeamData";

const MeetTheTeam = () => {
  // Sample team data


  return (
    <div className="meet-the-team">
      <h1 className="futuristic-title">Meet the Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="team-details">
              <h2 className="team-name">{member.name}</h2>
              <p className="team-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;