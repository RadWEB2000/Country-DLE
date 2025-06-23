export default function getDailyCountry(countries: Array<T_Country_Single>): T_Country_Single {
    const today = new Date().toISOString().slice(0, 10);
    const hash = [...today].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % countries.length;
    return countries[index];
}

// export default function getDailyCountry(countries: Array<T_Country_Single>): T_Country_Single {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = now.getMonth(); // 0-indexed
//     const day = now.getDate();
//     const hour = now.getHours();
//     const roundedMinutes = Math.floor(now.getMinutes() / 15); // 0–3 w ciągu godziny

//     // Stwórz unikalny ciąg oparty o aktualny 15-minutowy przedział czasu
//     const seed = `${year}-${month}-${day}-${hour}-${roundedMinutes}`;

//     // Zamień seed na hash
//     const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);

//     const index = hash % countries.length;
//     return countries[index];
// }
