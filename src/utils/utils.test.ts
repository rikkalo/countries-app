import {
  countriesMock,
  countriesSortedByNameAscMock,
  countriesSortedByNameDescMock,
  countriesWithAreaNullMock,
  countriesWithDensityMock
} from "../mock";
import { getDataWithDensity, getSortedItems } from "./index";

describe("Utils", () => {
  it("getDataWithDensity: should get data with density correctly", () => {
    expect(getDataWithDensity(countriesMock)).toEqual(countriesWithDensityMock);
  });

  it("getDataWithDensity: should get data with density correctly if area is null", () => {
    expect(getDataWithDensity(countriesWithAreaNullMock)[0].density).toEqual(0);
  });

  it("getSortedItems: should get sorted by name data correctly if order is asc", () => {
    expect(countriesMock.sort(getSortedItems("asc", "name"))).toEqual(
      countriesSortedByNameAscMock
    );
  });

  it("getSortedItems: should get sorted by name data correctly if order is desc", () => {
    expect(countriesMock.sort(getSortedItems("desc", "name"))).toEqual(
      countriesSortedByNameDescMock
    );
  });
});
