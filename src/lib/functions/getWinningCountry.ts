import { singleCountryApi } from "@/data/constants";
import getCountrySlug from "./getCountrySlug";

type t_CountryDetails = t_Country_Table_Record & {
    uri: string,
    cca2: string,
    capital: string,
    altSpellings: string,
    borders: string,
    genders: {
        m: string;
        f: string;
    }
    map: string;
    coatOfArms: string;
};

type t_WikiDetails = {
    batchcomplete: '' | string;
    query: {
        pages: {
            [key: number]: {
                pageid: number;
                ns: number;
                title: string;
                extract: string;
            }
        }
    }
}

type t_GetWinningCountry = {
    row: {
        area: number;
        carSide: 'left' | 'right',
        continents: Array<string>;
        country: string;
        currencies: Array<string>;
        independent: boolean;
        flag: {
            alt: string;
            src: string;
        };
        languages: Array<string>;
        population: number;
        postalCode: string;
        region: string;
        subregion: string;
        timezones: Array<string>;
        uri: string;
        startOfWeek: nameOfWeekDays;
    };
    card: {
        anthem: string;
        country: string,
        description: string;
        area: number;
        carSide: 'left' | 'right',
        domain: string;
        independent: boolean;
        currencies: Array<string>;
        capital: string;
        altSpellings: string;
        region: string;
        population: number;
        subregion: string;
        languages: Array<string>;
        borders: string;
        genders: {
            m: string;
            f: string;
        };
        map: string;
        timezones: Array<string>;
        continents: Array<string>;
        flag: {
            alt: string;
            src: string;
        };
        coatOfArms: string;
        startOfWeek: nameOfWeekDays;
        postalCode: string;
        uri: string;
    }
}


export default async function getWinningCountry(state: string): Promise<t_GetWinningCountry> {

    // country row
    const { altSpellings, area, borders, capital, carSide, cca2, coatOfArms, continents, country, currencies, flag, genders, independent, languages, map, population, postalCode, region,  timezones, uri, startOfWeek, subregion }: t_CountryDetails = await fetch(`${singleCountryApi}${state}`).then(res => res.json()).then((res: Array<t_Country>): t_CountryDetails => {
        const state = res[0];
        return {
            area: state.area,
            cca2: state.cca2,
            carSide: state.car ? state.car.side : 'left',
            continents: state.continents,
            country: state.name.official,
            currencies: state.currencies ? Object.values(state.currencies).map((item) => item.name) : [],
            flag: {
                alt: state.flags.alt ?? '',
                src: `${state.flags?.png}`
            },
            independent: state.independent,
            languages: state.languages ? Object.values(state.languages) : [],
            population: state.population,
            postalCode: state.postalCode?.format ? state.postalCode.format : 'unknown',
            region: state.region,
            status: state.status,
            timezones: state.timezones,
            uri: getCountrySlug(state.name.common),
            startOfWeek: state.startOfWeek ? state.startOfWeek : 'monday',
            subregion: state.subregion,
            capital: state.capital[0],
            altSpellings: state.altSpellings.join(', '),
            borders: state.borders?.join(', '),
            genders: state.demonyms.eng,
            map: state.maps?.openStreetMaps,
            coatOfArms: state.coatOfArms.png,

        };
    });
    const wikiDetails = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${state}&exintro=true&explaintext=true&format=json`).then(res => res.json()).then((res: t_WikiDetails): string => {
        // console.log('description 5: ', Object.values(res.query.pages)[0].extract)
        return Object.values(res.query.pages)[0].extract
    })
    const anthem = `https://nationalanthems.info/${cca2.toLowerCase()}.mp3`

    // const restful = await fetch(`https://restfulcountries.com/api/v1/countries/${state}/presidents`,{
    //     headers:{
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'    ,
    //         'Authorization': `Bearer ${restfulCountriesApiKey}`,
    //     }
    // }).then(res => res.json()).then(res => res);

    // console.log(`restul: `, restful);

    const results: t_GetWinningCountry = {
        row: {
            area, carSide, continents, country, currencies, flag, independent, languages, population, postalCode, region, startOfWeek, subregion, timezones, uri
        },
        card: {
            anthem,
            altSpellings,
            country,
            area,
            borders,
            carSide,
            capital,
            coatOfArms,
            continents,
            currencies,
            description: wikiDetails,
            population,
            domain: cca2,
            flag, genders,
            independent, languages, map, postalCode, region, startOfWeek, subregion, timezones, uri
        }
    }
    return results;
}