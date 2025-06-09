import { allCountriesApi } from "@/data/constants";



export default async function getAllCountriesNames(): Promise<Array<t_countryHint>> {
    const countries = await fetch(`${allCountriesApi}?fields=name,flags`).then(res => res.json()).then((res) => {
        const states: t_countryHint[] = res.map((item: allCountries): t_countryHint => ({
            name: item.name.official,
            flag: item.flags.png
        }));
        return states;
    });

    return countries;
}