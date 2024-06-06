import React from "react";
import "./GenerateTeamsForm.scss";

export default function GenerateTeamsForm() {
    return (
        <form className="generate-teams-form">
            <span>
                <label for="csv">Upload CSV:</label>
                <input name="csv" type="file" accept=".csv" />
            </span>
            <span>
                <label for="maxGroupSize">Max Group Size:</label>
                <input type="number" name="maxGroupSize" placeholder="5" />
            </span>
            <span>
                <label for="allowedDeviation">Allowed Deviation:</label>
                <input type="number" name="allowedDeviation" placeholder="4" />
            </span>
            <button className="submit-button" type="submit">
                Generate Teams
            </button>
        </form>
    );
}
