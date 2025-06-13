export { }
declare global {
    type t_Country = {
        name: {
            common: string;
            official: string;
            nativeName?: {
                [langCode: string]: {
                    official: string;
                    common: string;
                }
            }
        };
        tld: Array<string>;
        cca2: string;
        ccn3: string;
        cioc: string;
        independent: boolean;
        status: string;
        region: string;
        demonyms: {
            eng: {
                f: string;
                m: string;
            },
            fra: {
                f: string;
                m: string;
            }
        };
        altSpellings: Array<string>;
        subregion: string;
        area: number;
        unMembered: boolean;
        currencies: {
            [currencyCode: string]: {
                name: string;
                symbol: string;
            };
        };
        idd: {
            root: string;
            suffixes: Array<string>
        };
        capital: Array<string>;
        translations: {
            [langCode: string]: {
                official: string;
                common: string;
            }
        };
        latlng: [number, number];
        landlocked: boolean;
        borders: Array<string>;
        flag: string;
        maps: {
            googleMaps: string;
            openStreetMaps: string;
        };
        population: number;
        gini: {
            [year: string]: number;
        };
        fifa: string;
        car: {
            signs: Array<string>;
            side: "left" | "right"
        };
        timezones: Array<string>;
        continents: Array<string>;
        flags: {
            png: string;
            svg: string;
            alt?: string;
        };
        coatOfArms: {
            png: string;
            svg: string;
        };
        languages: {
            [langCode: string]: string;
        };
        startOfWeek: nameOfWeekDays;
        capitalInfo?: {
            latlng: [number, number]
        };
        postalCode: {
            format: string;
            regex?: string;
        }
    }

    type t_Country_Table_Record_Req = Pick<t_Country, 'name' | 'independent' | 'currencies' | 'status' | 'region' | 'subregion' | 'languages' | 'area' | 'population' | 'timezones' | 'continents' | 'flags' | 'startOfWeek' | 'postalCode' | 'car'>

    type t_Country_Table_Record = Pick<t_Country, 'independent' | 'status' | 'region' | 'subregion' | 'area' | 'population' | 'timezones' | 'continents' | 'startOfWeek'> & {
        country: string;
        carSide: 'left' | 'right';
        currencies: Array<string>;
        languages: Array<string>;
        postalCode: string;
        flag: {
            alt: string;
            src: string;
        }
    }

    type t_Country_Suggestion_Record = Pick<t_Country, "name" | "flags">

    type countryRow = {
        country: string;
        independent: boolean;
        status: string;
        currencies: string;
        // coatOfArms: string;
        // capital: string;
        region: string;
        continents: Array<string>;
        subregion: string;
        languages: Array<string>;
        area: number;
        pupulation: number;
        timezones: Array<string>;
        // borders: Array<string>;
        flag: {
            alt: string;
            src: string;
            // colors: string;
        };
        startOfWeek: nameOfWeekDays;
        carSide: string;
        postalCode: string;
    }

    type allCountries = {
        name: {
            common: string;
            official: string;
        }
        flags: {
            png: string;
        }
    }

    type t_countryHint = {
        name: string;
        flag: string;
    }
}