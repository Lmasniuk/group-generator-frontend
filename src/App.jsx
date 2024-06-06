import { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";
import TeamResults from "./components/TeamResults/TeamResults";
import GenerateTeamsForm from "./components/GenerateTeamsForm/GenerateTeamsForm";

function App() {
    const [teams, setTeams] = useState([]);

    return (
        <>
            <h1>Team Genie</h1>
            <GenerateTeamsForm setTeams={setTeams} />
            {teams.length > 0 && <TeamResults teams={teams} />}
        </>
    );
}

export default App;
