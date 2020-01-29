import { OrderBy, Sort } from "../types/common";
import { Country } from "../types/country";

export const getSortedItems = (order: Sort, orderBy: OrderBy) => {
  return order === "desc"
    ? (a: any, b: any) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a: any, b: any) => (a[orderBy] < b[orderBy] ? -1 : 1);
};

export const getDataWithDensity = (countries: Country[]) =>
  countries.map((country: Country) => {
    const density = country.area
      ? Math.round(country.population / country.area)
      : 0;

    return { ...country, density };
  });
