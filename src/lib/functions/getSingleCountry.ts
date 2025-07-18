export default async function getSingleCountry(nation: string) {
    const [response1, response2, response3] = await Promise.all([
        fetch(`${process.env.SINGLE_COUNTRY_API}${nation}?fields=continents,subregion,region,borders,gini,cca2,coatOfArms`),
        fetch(`${process.env.SINGLE_COUNTRY_API}${nation}?fields=capital,latlng,altSpellings,demonyms,translations,fifa`),
        fetch(`${process.env.SINGLE_COUNTRY_API}${nation}?fields=name,independent,currencies,languages,area,population,timezones,flags,startOfWeek,car`)
    ])
    const [data1, data2, data3] = await Promise.all([response1.json(), response2.json(), response3.json()]);
    const merged: T_Country_Merged = data1.map((merged: T_Country_Merged, index: number) => ({
        ...merged,
        ...data2[index],
        ...data3[index],
    }))[0]

    const country: T_Country_Single = {
        country: {
            anthem: `${process.env.ANTHEM_API}${merged.cca2.toLowerCase()}.mp3`,
            coatOfArms: merged.coatOfArms.png,
            description: await fetch(`${process.env.SHORT_DESCRIPTION_API}${merged.name.common}`).then(res => res.json()).then(res => `${Object.values(res.query.pages)[0]}`),
            flag: {
                alt: merged.flags.alt,
                src: merged.flags.png
            },
            name: {
                common: merged.name.common,
                official: merged.name.official,
                altSpellings: merged.altSpellings.join(`, `),
                translations: Object.values(merged.translations).map(item => item.official).join(', ')
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
            area: merged.area,
            capital: merged.capital.join(', '),
            latlng: merged.latlng
        },
        economy: {
            gini: Object.values(merged.gini)[0] ?? 0,
            currencies: Object.values(merged.currencies).map(item => item.name).join(', '),
            population: merged.population,
        },
        culture: {
            languages: Object.values(merged.languages).join(', '),
            startOfWeek: merged.startOfWeek,
            demonyms: merged.demonyms.eng,
            fifa: merged.fifa,
            car: {
                side: merged.car.side,
                signs: merged.car.signs.join(', ')
            }
        }
    }
    return country;
}