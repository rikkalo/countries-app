import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from "@material-ui/core";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { OrderBy, Sort } from "../../types/common";
import { Country } from "../../types/country";
import { getSortedItems } from "../../utils";

interface Props {
  countries: Country[];
}

export const CountriesTable: React.FC<Props> = props => {
  const { countries } = props;
  const [order, setOrder] = useState<Sort>("asc");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  const handleSortRequest = (property: OrderBy) => {
    if (orderBy === property) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrder("asc");
      setOrderBy(property);
    }
  };

  return (
    <TableContainer data-testid="table-country" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              <TableSortLabel
                active={orderBy === "name"}
                direction={order}
                onClick={() => handleSortRequest("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "density"}
                direction={order}
                onClick={() => handleSortRequest("density")}
              >
                Density
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .sort(getSortedItems(order, orderBy))
            .map((country: Country) => (
              <TableRow key={country.name}>
                <TableCell component="th" scope="row">
                  <Link
                    component={RouterLink}
                    to={`/country?name=${country.name}`}
                  >
                    {country.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{country.density || "-"}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
