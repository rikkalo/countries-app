import axios from "axios";

import { countriesWithDensityMock, countryMock } from "../mock";
import { fetchCountriesList, fetchCountryInfo } from "./index";

jest.mock("axios");

describe("API", () => {
  it("fetchCountriesList: should fetch data correctly", async () => {
    const response = { data: countriesWithDensityMock };

    (axios.get as jest.Mock).mockResolvedValue(response);

    const result = await fetchCountriesList("region");

    expect(result).toEqual(countriesWithDensityMock);
  });

  it("fetchCountriesList: should get error", async () => {
    const response = { response: { status: "404" } };

    (axios.get as jest.Mock).mockRejectedValue(response);

    let message = "";

    try {
      await fetchCountriesList("region");
    } catch (error) {
      message = error;
    }

    expect(message).toBe("404");
  });

  it("fetchCountryInfo: should fetch data correctly", async () => {
    const response = { data: countriesWithDensityMock };

    (axios.get as jest.Mock).mockResolvedValue(response);

    const result = await fetchCountryInfo("Chad");

    expect(result).toEqual(countryMock);
  });

  it("fetchCountryInfo: should get error", async () => {
    const response = { response: { status: "404" } };

    (axios.get as jest.Mock).mockRejectedValue(response);

    let message = "";

    try {
      await fetchCountriesList("Cha");
    } catch (error) {
      message = error;
    }

    expect(message).toBe("404");
  });
});
