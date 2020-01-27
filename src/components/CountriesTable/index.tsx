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
import { getSorting } from "../../utils";

interface Props {
  сountries: Country[];
}

export const CountriesTable: React.FC<Props> = props => {
  const { сountries } = props;
  const [order, setOrder] = useState<Sort>("asc");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  const handleSortRequest = (property: any) => {
    let orderBy = property;

    setOrder(order === "desc" ? "asc" : "desc");
    setOrderBy(orderBy);
  };

  return (
    <TableContainer component={Paper}>
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
                active={orderBy === "population"}
                direction={order}
                onClick={() => handleSortRequest("population")}
              >
                Population
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {сountries.sort(getSorting(order, orderBy)).map(country => (
            <TableRow key={country.name}>
              <TableCell component="th" scope="row">
                <Link
                  component={RouterLink}
                  to={`/сountry?name=${country.name}`}
                >
                  {country.name}
                </Link>
              </TableCell>
              <TableCell align="right">{country.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};