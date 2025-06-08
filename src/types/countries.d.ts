export { }
declare global {
    type countryRow = {
        country: string;
        independent: boolean;
        status: string;
        currencies: string;
        coatOfArms: string;
        capital: string;
        region: string;
        continents: Array<string>;
        subregion: string;
        languages: string;
        area: number;
        pupulation: string;
        borders: Array<string>;
        flag: {
            alt: string;
            src: string;
            colors: string;
        };
        startOfWeek: string;
        carSide: string;
        postalCode: string;
    }

    type countryNames = {
        name: {
            common: string;
            official: string;
        }
    }
}