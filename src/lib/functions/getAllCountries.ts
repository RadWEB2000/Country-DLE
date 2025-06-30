export default async function getAllCountries(): Promise<Array<T_Country_Single>> {
    const [response1, response2, response3] = await Promise.all([
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=continents,subregion,region,borders,gini,cca2,coatOfArms`),
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=capital,latlng,altSpellings,demonyms,translations,fifa`),
        fetch(`${process.env.ALL_COUNTRIES_API}?fields=name,independent,currencies,languages,area,population,timezones,flags,startOfWeek,car`)
    ])
    const [data1, data2, data3] = await Promise.all([response1.json(), response2.json(), response3.json()]);
    const merged: Array<T_Country_Merged> = data1.map((item: T_Country_Merged, index: number) => ({
        ...item,
        ...data2[index],
        ...data3[index]
    }))


    const countries: Array<T_Country_Single> = await Promise.all(
        merged.map(async (item: T_Country_Merged): Promise<T_Country_Single> => {
            let description = '';
            try {
                const res = await fetch(`${process.env.SHORT_DESCRIPTION_API}${item.name.common}`);
                const json = await res.json();
                const page = Object.values(json.query.pages)[0] as any;
                description = page.extract ?? '';
            } catch (e) {
                console.error(`Failed to fetch description for ${item.name.common}`, e);
            }

            return {
                country: {
                    anthem: `${process.env.ANTHEM_API}${item.cca2.toLowerCase()}.mp3`,
                    coatOfArms: item.coatOfArms.png,
                    description,
                    flag: {
                        alt: item.flags.alt,
                        src: item.flags.png
                    },
                    name: {
                        common: item.name.common,
                        official: item.name.official,
                        altSpellings: item.altSpellings.join(', '),
                        translations: Object.values(item.translations).map(item => item.official).join(', '),
                    },
                    independent: {
                        status: item.independent,
                        description: item.independent ? 'Independent' : 'Dependent'
                    }
                },
                geo: {
                    continents: item.continents.join(', '),
                    capital: item.capital.join(', '),
                    latlng: item.latlng,
                    region: item.region,
                    subregion: item.subregion,
                    timezones: item.timezones.join(', '),
                    borders: item.borders?.join(', ') ?? 'unknown',
                    area: item.area
                },
                economy: {
                    gini: Object.values(item.gini)[0] ?? 0,
                    currencies: Object.values(item.currencies).map(item => item.name).join(', '),
                    population: item.population
                },
                culture: {
                    languages: Object.values(item.languages).join(', '),
                    startOfWeek: item.startOfWeek,
                    fifa: item.fifa,
                    demonyms: item.demonyms.eng,
                    car: {
                        side: item.car.side,
                        signs: item.car.signs.join(', ')
                    }
                }
            };
        })
    );
    return countries;
}