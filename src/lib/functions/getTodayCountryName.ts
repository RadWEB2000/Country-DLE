export default function getTodayCountryName(countries: Array<t_Country_Table_Record & { uri: string, cc2a: string }>): string {
    const today = new Date().toISOString().slice(0, 10);
    const hash = [...today].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % countries.length;
    return countries[index].country
}