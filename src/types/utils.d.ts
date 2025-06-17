export { };
declare global {
    type nameOfWeekDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    type link = {
        label: string;
        uri: string;
    }

    type carSide = 'left' | 'right'

    type image = {
        alt: string;
        src: string;
        title: string;
    }

    type ComparisonStatus = 'done' | 'close' | 'wrong';
    type ComparisonStatusShort = Exclude<ComparisonStatus, 'close'>
    type ComparisonStatusVector = 'done' | 'wrong-up' | 'wrong-down' | 'wrong'

    type ComparisonStatusdCountries = {
        independent: ComparisonStatusShort;
        languages: ComparisonStatus;
        carSide: ComparisonStatusShort;
        startOfWeek: ComparisonStatusShort;
        currencies: ComparisonStatus;
        gini: ComparisonStatusVector;
        area: ComparisonStatusVector;
        population: ComparisonStatusVector;
        borders: ComparisonStatus;
        region: ComparisonStatus;
        continents: ComparisonStatus;
        subregion: ComparisonStatus;
        timezones: ComparisonStatus;
        name: ComparisonStatusShort;
    }
}