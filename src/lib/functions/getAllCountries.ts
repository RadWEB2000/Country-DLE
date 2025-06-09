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

    const countries: Array<t_Country_Table_Record> = merged.map(({ area, continents, currencies, name, population, region, timezones, car, flags, independent, languages, postalCode, startOfWeek, status, subregion }: t_Country_Table_Record_Req): t_Country_Table_Record => {
        return {
            country: name.official,
            independent: independent,
            area: area,
            carSide: car ? car.side : 'left',
            continents: continents,
            currencies: Object.values(currencies).map((item) => item.name),
            flag: {
                alt: `${flags?.alt}`,
                src: `${flags?.png}`
            },
            languages: languages ? Object.values(languages) : [],
            postalCode: `${postalCode?.format}`,
            population: population,
            region: region,
            subregion: `${subregion}`,
            startOfWeek: startOfWeek ? startOfWeek : 'friday',
            status: status,
            timezones: timezones
        }
    })

    return countries;
}