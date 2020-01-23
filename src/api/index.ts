import axios from "axios";

export async function fetchCountriesList(region: string): Promise<any> {
  let result = {
    data: [],
    error: null
  };

  try {
    const response = await axios(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    result.data = response.data;
  } catch (error) {
    result.error = error.response.status;
  }

  return result;
}

export async function fetchCountryInfo(countryName: string): Promise<any> {
  let result = {
    data: null,
    error: null
  };

  try {
    const response = await axios(
      `https://restcountries.eu/rest/v2/name/${countryName.toLowerCase()}?fullText=true`
    );

    result.data = response.data[0];
  } catch (error) {
    result.error = error.response.status;
  }

  return result;
}
