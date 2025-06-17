export default async function getAllCountries() {
    const [response1, response2] = await Promise.all([
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=continents,subregion,region,borders,gini`),
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=name,independent,currencies,languages,area,population,timezones,flags,startOfWeek,car`)
    ])
    const [data1, data2] = await Promise.all([response1.json(), response2.json()]);
    const merged: Array<T_Country_Merged> = data1.map((item: T_Country_Merged, index: number) => ({
        ...item,
        ...data2[index]
    }))
    const countries: Array<T_Country_Single> = merged.map((item: T_Country_Merged): T_Country_Single => {
        return {
            country: {
                flag: {
                    alt: item.flags.alt,
                    src: item.flags.png
                },
                name: {
                    common: item.name.common,
                    official: item.name.official
                },
                independent: {
                    status: item.independent,
                    description: item.independent ? 'Independent' : 'Dependent'
                }
            },
            geo: {
                continents: item.continents.join(', '),
                region: item.region,
                subregion: item.subregion,
                timezones: item.timezones.join(', '),
                borders: item.borders.join(', ') ?? 'unknown',
                area: item.area
            },
            economy: {
                gini: Object.values(item.gini)[0] ?? 0,
                currencies: Object.values(item.currencies).map(item => item.name).join(', '),
                population: item.population,
            },
            culture: {
                languages: Object.values(item.languages).join(', '),
                startOfWeek: item.startOfWeek,
                car: {
                    side: item.car.side,
                    signs: item.car.signs.join(', ')
                }
            }
        }
    })
    return countries;
}