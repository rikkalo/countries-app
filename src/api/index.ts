import axios from "axios";

import { Country } from "../types/country";
import { getDensity } from "../utils";

export async function fetchCountriesList(
  region: string
): Promise<{ data: Country[]; error: string | null }> {
  try {
    const response = await axios(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    const countries = getDensity(response.data);

    return { data: countries, error: null };
  } catch (error) {
    return { data: [], error: error.response.status };
  }
}

export async function fetchCountryInfo(
  countryName: string
): Promise<{ data: Country | null; error: string | null }> {
  try {
    const response = await axios(
      `https://restcountries.eu/rest/v2/name/${countryName.toLowerCase()}?fullText=true`
    );

    return { data: response.data[0], error: null };
  } catch (error) {
    return { data: null, error: error.response.status };
  }
}
