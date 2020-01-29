import axios from "axios";

import { Country } from "../types/country";
import { getDataWithDensity } from "../utils";

export async function fetchCountriesList(region: string): Promise<Country[]> {
  try {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;

    const response = await axios.get(url);

    return getDataWithDensity(response.data);
  } catch (error) {
    throw error.response.status;
  }
}

export async function fetchCountryInfo(countryName: string): Promise<Country> {
  try {
    const url = `https://restcountries.eu/rest/v2/name/${countryName.toLowerCase()}`;

    const response = await axios.get(url, { params: { fullText: true } });

    return response.data[0];
  } catch (error) {
    throw error.response.status;
  }
}
