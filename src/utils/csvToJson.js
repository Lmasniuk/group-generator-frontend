const convertCsvToJson = (csvData) => {
    const lines = csvData.split("\n");
    const jsonData = lines
        .map((line) => {
            if (line.length > 0) {
                const studentData = line.split(",");
                const name = studentData[0];
                const mark = parseInt(studentData[1]);
                return { name, mark };
            }
        })
        .filter(Boolean);

    return jsonData;
};

export default convertCsvToJson;
