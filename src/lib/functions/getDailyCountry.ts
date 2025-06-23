export default function getDailyCountry(countries: Array<T_Country_Single>): T_Country_Single {
    const today = new Date().toISOString().slice(0, 10);
    const hash = [...today].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % countries.length;
    return countries[index];
}

