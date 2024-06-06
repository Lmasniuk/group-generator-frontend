import { useState } from "react";

import "./App.scss";
import TeamResults from "./components/TeamResults/TeamResults";
import GenerateTeamsForm from "./components/GenerateTeamsForm/GenerateTeamsForm";

function App() {
    const tempTeams = [
        [
            { name: "Person9", mark: 73 },
            { name: "Person2", mark: 93 },
            { name: "Person6", mark: 99 },
            { name: "Person7", mark: 65 },
            { name: "Person10", mark: 82 },
        ],
        [
            { name: "Person3", mark: 78 },
            { name: "Person1", mark: 74 },
            { name: "Person8", mark: 72 },
            { name: "Person4", mark: 88 },
            { name: "Person5", mark: 91 },
        ],
    ];

    const [teams, setTeams] = useState(tempTeams);

    return (
        <>
            <h1>Team Generator</h1>
            <GenerateTeamsForm />
            <TeamResults teams={teams} />
        </>
    );
}

export default App;
