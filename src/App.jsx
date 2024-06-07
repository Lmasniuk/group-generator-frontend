import { useEffect, useState } from "react";

import "./App.scss";
import TeamResults from "./components/TeamResults/TeamResults";
import GenerateTeamsForm from "./components/GenerateTeamsForm/GenerateTeamsForm";

function App() {
    const [teams, setTeams] = useState([]);

    const downloadExampleCsv = async () => {
        const response = await fetch("../test-data/test-csv.csv");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Read the CSV data as text
        const csvData = await response.text();
        console.log([csvData]);

        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "example.csv";
        document.body.appendChild(a);
        a.click();

        // Remove the anchor element after download
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <h1>Team Genie</h1>
            <button onClick={downloadExampleCsv}>
                Download Example .csv File
            </button>
            <GenerateTeamsForm setTeams={setTeams} />
            {teams.length > 0 && <TeamResults teams={teams} />}
        </>
    );
}

export default App;
