import axios from 'axios';

export async function fetchCountriesList(region: string) {
    const result = await axios(
      `https://restcountries.eu/rest/v2/region/${region}`,
    );
    return result.data;
}

export async function fetchCountryInfo(countryName: string) {
    const result = await axios(
        `https://restcountries.eu/rest/v2/name/${countryName.toLowerCase()}?fullText=true`,
    );
    return result.data[0];
}