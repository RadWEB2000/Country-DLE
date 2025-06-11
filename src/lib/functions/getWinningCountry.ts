import { singleCountryApi } from "@/data/constants";
import getCountrySlug from "./getCountrySlug";

type t_CountryDetails = t_Country_Table_Record & { uri: string };

export default async function getWinningCountry(country: string) {

    // country row
    const countryDetails: t_CountryDetails = await fetch(`${singleCountryApi}${country}`).then(res => res.json()).then((res: Array<t_Country>): t_CountryDetails => {
        const state = res[0];
        return {
            area: state.area,
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
            subregion: state.subregion
        };
    });

    // short description
    const wikiDetails = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${country}&exintro=true&explaintext=true&format=json`).then(res => res.json())

    // console.log(Object.values(wikiDetails.query.pages)[0])

    //  anthem
    const anthem = `https://nationalanthems.info/pl.mp3`

    console.log(anthem)

    return countryDetails;
}