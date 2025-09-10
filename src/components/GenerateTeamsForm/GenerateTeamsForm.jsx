import { useEffect } from "react";
import axios from "axios";
import "./GenerateTeamsForm.scss";
import convertCsvToJson from "../../utils/csvToJson";
import { useState } from "react";

export default function GenerateTeamsForm({ setTeams }) {
    const baseUrl = import.meta.env.VITE_API_URL;
    const port = import.meta.env.VITE_PORT;

    const [file, setFile] = useState(null);
    const [maxGroupSize, setMaxGroupSize] = useState("");
    const [allowedDeviation, setAllowedDeviation] = useState("");
    const [groupGenerationRequestBody, setGroupGenerationRequestBody] =
        useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (Object.keys(groupGenerationRequestBody).length > 0) {
            generateTeams();
        }
    }, [groupGenerationRequestBody]);

    useEffect(() => {
        checkButtonStatus();
    }, [file, maxGroupSize, allowedDeviation]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleMaxGroupSizeChange = (e) => {
        setMaxGroupSize(e.target.value);
    };

    const handleAllowedDeviationChange = (e) => {
        setAllowedDeviation(e.target.value);
    };

    const checkButtonStatus = () => {
        if (!file || !maxGroupSize || !allowedDeviation) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    };

    async function generateTeams() {
        let url;
        if (port) {
            url = `${baseUrl}:${port}/generate-groups`;
        } else {
            url = `${baseUrl}/generate-groups`;
        }
        const response = await axios.post(url, groupGenerationRequestBody);
        const data = response.data;
        setTeams(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission

        const reader = new FileReader();
        reader.onload = () => {
            const csvData = reader.result;
            const studentsAsJson = convertCsvToJson(csvData);

            setGroupGenerationRequestBody({
                maxGroupSize: parseInt(maxGroupSize),
                allowedDeviation: parseInt(allowedDeviation),
                people: studentsAsJson,
            });
        };
        reader.readAsText(file);
    };
    return (
        <form onSubmit={handleSubmit} className="form__container">
            <div className="form__group">
                <label htmlFor="csvFile">Upload CSV File</label>
                <input
                    type="file"
                    id="csvFile"
                    accept=".csv"
                    onChange={handleFileChange}
                />
            </div>
            <div className="form__group">
                <label htmlFor="maxGroupSize">Max Group Size</label>
                <input
                    type="number"
                    id="maxGroupSize"
                    value={maxGroupSize}
                    onChange={handleMaxGroupSizeChange}
                    placeholder="5"
                />
            </div>
            <div className="form__group">
                <label htmlFor="allowedDeviation">Allowed Deviation (%)</label>
                <input
                    type="number"
                    id="allowedDeviation"
                    value={allowedDeviation}
                    onChange={handleAllowedDeviationChange}
                    placeholder="5"
                />
            </div>
            <button
                className={`submit-button submit-button--${
                    buttonDisabled ? "disabled" : ""
                }`}
                type="submit"
                disabled={buttonDisabled}
            >
                Generate Teams
            </button>
        </form>
    );
}
