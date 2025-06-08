import { allCountriesApi } from "@/data/constants";



export default async function getAllCountriesNames(): Promise<Array<string>> {
    const countries = await fetch(`${allCountriesApi}?fields=name`).then(res => res.json()).then(res => {
        const names = res.map((countryName: countryNames): string => countryName.name.official).filter(Boolean).sort((a: string, b: string) => a.localeCompare(b));
        console.log('names', names)
        return names;
    });

    return countries;
}