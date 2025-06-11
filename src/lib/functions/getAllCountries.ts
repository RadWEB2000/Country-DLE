import { allCountriesApi } from "@/data/constants";

export default async function getAllCountries() {

    const allowedFields: Array<string> = [
        'name',
        'independent',
        'currencies',
        'region',
        'subregion',
        'languages',
        'area',
        'population',
        'timezones',
        'continents',
        'flags',
        'startOfWeek',
        'postalCode',
        'car',
    ]

    const [res1, res2] = await Promise.all([
        fetch(`${allCountriesApi}?fields=${allowedFields.slice(0, 10).join(',')}`),
        fetch(`${allCountriesApi}?fields=${allowedFields.slice(10).join(',')}`)
    ])

    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    const merged: Array<t_Country> = data1.map((country: countryRow, index: number) => ({
        ...country,
        ...data2[index]
    }))

    const countries: Array<t_Country_Table_Record> = merged.map((res: t_Country_Table_Record_Req): t_Country_Table_Record => {
        return {
            country: res.name.official,
            independent: res.independent,
            area: res.area,
            carSide: res.car ? res.car.side : 'left',
            continents: res.continents,
            currencies: Object.values(res.currencies).map((item) => item.name),
            flag: {
                alt: `${res.flags?.alt}`,
                src: `${res.flags?.png}`
            },
            languages: res.languages ? Object.values(res.languages) : [],
            postalCode: `${res.postalCode?.format}`,
            population: res.population,
            region: res.region,
            subregion: `${res.subregion}`,
            startOfWeek: res.startOfWeek ? res.startOfWeek : 'friday',
            status: res.status,
            timezones: res.timezones
        }
    })

    return countries;
}