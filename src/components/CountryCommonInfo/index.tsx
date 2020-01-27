import { CardMedia, Typography } from "@material-ui/core";
import React from "react";

import { Country } from "../../types/country";

interface Props {
  сountry: Country;
}

interface Item {
  title: string;
  field:
    | "alpha2Code"
    | "alpha3Code"
    | "capital"
    | "region"
    | "subregion"
    | "population"
    | "demonym"
    | "nativeName"
    | "numericCode"
    | "area"
    | "gini"
    | "cioc";
}

const items = [
  { title: "ISO 3166-1 alpha-2", field: "alpha2Code" },
  { title: "ISO 3166-1 alpha-3", field: "alpha3Code" },
  { title: "Capital", field: "capital" },
  { title: "Region", field: "region" },
  { title: "Subregion", field: "subregion" },
  { title: "Population", field: "population" },
  { title: "Demonym", field: "demonym" },
  { title: "Native name", field: "nativeName" },
  { title: "Numeric code", field: "numericCode" },
  { title: "Area", field: "area" },
  { title: "Gini coefficient", field: "gini" },
  { title: "Cioc", field: "cioc" }
] as Item[];

export const CountryCommonInfo: React.FC<Props> = props => {
  const { сountry } = props;

  return (
    <>
      <Typography variant="h3" component="h3">
        {сountry.name}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image={сountry.flag || undefined}
        title="Flag"
      />
      <Typography variant="h6" component="h6">
        Top level domain: {сountry.topLevelDomain[0]}
      </Typography>
      <Typography variant="h6" component="h6">
        Coordinates: {сountry.latlng[0]}, {сountry.latlng[1]}
      </Typography>
      {items.map(item => (
        <Typography key={item.field} variant="h6" component="h6">
          {item.title}: {сountry[item.field]}
        </Typography>
      ))}
    </>
  );
};
