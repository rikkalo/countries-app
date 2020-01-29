import { Grid, Typography } from "@material-ui/core";
import React from "react";

import { Country } from "../../types/country";
import { Flag } from "../Flag";
import styles from "./style.module.css";

interface Props {
  country: Country;
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
  const { country } = props;

  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Typography variant="h3" component="h3">
          {country.name}
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        {country.flag && <Flag value={country.flag} name={country.name} />}
      </Grid>
      <Grid item md={6} xs={12}>
        <div>
          <Typography
            className={styles.title}
            variant="subtitle1"
            component="span"
            color="textPrimary"
          >
            Top level domain:
          </Typography>
          <Typography variant="subtitle2" component="span">
            {country.topLevelDomain[0]}
          </Typography>
        </div>
        <div>
          <Typography
            className={styles.title}
            variant="subtitle1"
            component="span"
            color="textPrimary"
          >
            Coordinates:
          </Typography>
          <Typography variant="subtitle2" component="span">
            {country.latlng[0]}, {country.latlng[1]}
          </Typography>
        </div>

        {items
          .filter(item => country && country[item.field])
          .map(item => (
            <div key={item.title}>
              <Typography
                className={styles.title}
                variant="subtitle1"
                component="span"
              >
                {item.title}:
              </Typography>
              <Typography variant="subtitle2" component="span">
                {country[item.field]}
              </Typography>
            </div>
          ))}
      </Grid>
    </Grid>
  );
};
