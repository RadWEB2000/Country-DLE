type vaildateResult = 'wrong' | 'close' | 'correct';

type t_validateCountry = {
    winCountry: t_Country_Table_Record;
    addedCountry: t_Country_Table_Record;
}

export default function validateCountry({ addedCountry, winCountry }: t_validateCountry) {


    function validateLanguages(): vaildateResult {
        const addedLangs = addedCountry.languages.join(', ');
        const winLangs = winCountry.languages.join(', ');
        if (winLangs === addedLangs) return "correct";
        else if (addedLangs.includes(winLangs) && (winLangs !== addedLangs)) return "close";
        else return "wrong"
    }

    function validateContinents(): vaildateResult {
        const winContinents = winCountry.continents.join(', ');
        const addedContinents = addedCountry.continents.join(', ');
        if (winContinents === addedContinents) return "correct";
        else if (addedContinents.includes(winContinents) && (winContinents !== addedContinents)) return "close";
        else return "wrong"
    }

    return {
        continents: validateContinents(),
        languages: validateLanguages()
    }

}