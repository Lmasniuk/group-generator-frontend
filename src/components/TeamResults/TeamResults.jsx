import React from "react";
import "./TeamResults.scss";

export default function TeamResults({ teams }) {
    return (
        <section className="team-results__container">
            {teams.map((team, teamIndex) => (
                <div className="team-results__card" key={teamIndex}>
                    <h2>Team {teamIndex + 1}</h2>
                    <ul className="team-results__member-list">
                        {team.map((student, studentIndex) => (
                            <li
                                className="team-results__member"
                                key={studentIndex}
                            >
                                {student.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
