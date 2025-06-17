import compareStringArrays from "./compareStringArrays";
import vectorComparison from "./vectorComparison";

export default function compareCountries(winCountry: T_Country_Single, selectedCountry: T_Country_Single): ComparisonStatusdCountries {

    function compareIndependent(): ComparisonStatusShort {
        const win = winCountry.country.independent.status;
        const selected = selectedCountry.country.independent.status;
        if (win === selected) {
            return 'done'
        } else {
            return 'wrong'
        }
    }

    function compareCarSide(): ComparisonStatusShort {
        const win = winCountry.culture.car.side;
        const selected = selectedCountry.culture.car.side;
        if (win === selected) {
            return 'done'
        } else {
            return 'wrong'
        }
    }
    function compareStartOfWeek(): ComparisonStatusShort {
        const win = winCountry.culture.startOfWeek;
        const selected = selectedCountry.culture.startOfWeek;
        if (win === selected) {
            return 'done'
        } else {
            return 'wrong'
        }
    }

    function compareSubregion(): ComparisonStatus {
        const win = winCountry.geo.subregion;
        const selected = selectedCountry.geo.subregion
        if (win === selected) {
            return 'done'
        } else if (selected.includes(win) && win !== selected) {
            return 'close'
        } else {
            return 'wrong'
        }
    }

    function compareName(): ComparisonStatusShort {
        const win = winCountry.country.name.official;
        const selected = selectedCountry.country.name.official;
        if (win === selected) {
            return 'done'
        } else {
            return 'wrong'
        }
    }

    const compared: ComparisonStatusdCountries = {
        independent: compareIndependent(),
        languages: compareStringArrays(winCountry.culture.languages, selectedCountry.culture.languages),
        carSide: compareCarSide(),
        startOfWeek: compareStartOfWeek(),
        currencies: compareStringArrays(winCountry.economy.currencies, selectedCountry.economy.currencies),
        gini: vectorComparison(winCountry.economy.gini, selectedCountry.economy.gini),
        area: vectorComparison(winCountry.geo.area, selectedCountry.geo.area),
        population: vectorComparison(winCountry.economy.population, selectedCountry.economy.population),
        borders: compareStringArrays(winCountry.geo.borders, selectedCountry.geo.borders),
        continents: compareStringArrays(winCountry.geo.continents, selectedCountry.geo.continents),
        name: compareName(),
        region: compareStringArrays(winCountry.geo.region, selectedCountry.geo.region),
        subregion: compareSubregion(),
        timezones: compareStringArrays(winCountry.geo.timezones, selectedCountry.geo.timezones)
    }

    return compared;

}