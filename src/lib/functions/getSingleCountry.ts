export default async function getSingleCountry(nation: string) {
    const [response1, response2] = await Promise.all([
        fetch(`${process.env.SINGLE_COUNTRY_API}${nation}?fields=continents,subregion,region,borders,gini`),
        fetch(`${process.env.SINGLE_COUNTRY_API}${nation}?fields=name,independent,currencies,languages,area,population,timezones,flags,startOfWeek,car`)
    ])
    console.log(`single country ${process.env.SINGLE_CUNTRY_API}`)
    const [data1, data2] = await Promise.all([response1.json(), response2.json()]);
    const merged: T_Country_Merged = data1.map((merged: T_Country_Merged, index: number) => ({
        ...merged,
        ...data2[index]
    }))[0]
    const country: T_Country_Single = {
        country: {
            flag: {
                alt: merged.flags.alt,
                src: merged.flags.png
            },
            name: {
                common: merged.name.common,
                official: merged.name.official
            },
            independent: {
                status: merged.independent,
                description: merged.independent ? 'Independent' : 'Dependent'
            }
        },
        geo: {
            continents: merged.continents.join(', '),
            region: merged.region,
            subregion: merged.subregion,
            timezones: merged.timezones.join(', '),
            borders: merged.borders.join(', ') ?? 'unknown',
            area: merged.area
        },
        economy: {
            gini: Object.values(merged.gini)[0] ?? 0,
            currencies: Object.values(merged.currencies).map(item => item.name).join(', '),
            population: merged.population,
        },
        culture: {
            languages: Object.values(merged.languages).join(', '),
            startOfWeek: merged.startOfWeek,
            car: {
                side: merged.car.side,
                signs: merged.car.signs.join(', ')
            }
        }
    }
    return country;
}