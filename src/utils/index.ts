import { OrderBy, Sort } from "../types/common";
import { Country } from "../types/country";

export const getSorting = (order: Sort, orderBy: OrderBy) => {
  return order === "desc"
    ? (a: Country, b: Country) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a: Country, b: Country) => (a[orderBy] < b[orderBy] ? -1 : 1);
};
