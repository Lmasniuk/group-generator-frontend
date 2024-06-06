import React from "react";
import "./TeamResults.scss";

export default function TeamResults({ teams }) {
    return (
        <section className="team-results">
            {teams.map((team, teamIndex) => (
                <div className="team" key={teamIndex}>
                    <h2>Team {teamIndex + 1}</h2>
                    <ul className="team__member-list">
                        {team.map((student, studentIndex) => (
                            <li className="team__member" key={studentIndex}>
                                {student.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
