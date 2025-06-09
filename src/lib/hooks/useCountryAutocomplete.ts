"use client"
import { useState } from "react";

export default function useCountryAutocomplete(countries: Array<t_Country_Table_Record>) {
    const [value, setValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Array<t_Country_Table_Record>>([]);

    function getSuggestions(value: string): Array<t_Country_Table_Record> {
        const lower = value.toLowerCase();
        return countries.filter(country => country.country.toLowerCase().includes(lower));
    };

    function onSuggestionFetchRequested({ value }: { value: string }) {
        setSuggestions(getSuggestions(value));
    }

    function onSuggestionsClearRequested() {
        setSuggestions([]);
    }

    function getSuggestionValue(suggestion: t_Country_Table_Record): string {
        return suggestion.country;
    }

    return {
        value,
        setValue,
        suggestions,
        onSuggestionFetchRequested,
        onSuggestionsClearRequested,
        getSuggestionValue
    }

}