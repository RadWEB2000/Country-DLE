export default async function getAllCountries(): Promise<Array<T_Country_Single>> {
    const [response1, response2] = await Promise.all([
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=continents,subregion,region,borders,gini,cca2,coatOfArms`),
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=name,independent,currencies,languages,area,population,timezones,flags,startOfWeek,car`)
    ])
    const [data1, data2] = await Promise.all([response1.json(), response2.json()]);
    const merged: Array<T_Country_Merged> = data1.map((item: T_Country_Merged, index: number) => ({
        ...item,
        ...data2[index]
    }))



    const countries: Array<T_Country_Single> = merged.map(async (item: T_Country_Merged): Promise<T_Country_Single> => {
        return {
            country: {
                anthem: `${process.env.ANTHEM_API}${item.cca2.toLowerCase()}.mp3`,
                coatOfArms: item.coatOfArms.png,
                description: await fetch(`${process.env.SHORT_DESCRIPTION_API}${item.name.common}`).then(res => res.json()).then(res => `${Object.values(res.query.pages)[0]}`),
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