import { Grid, Typography } from "@material-ui/core";
import React from "react";

import { Country } from "../../types/country";
import { Flag } from "../Flag";
import styles from "./style.module.css";

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
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Typography variant="h3" component="h3">
          {сountry.name}
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        {сountry.flag && <Flag value={сountry.flag} />}
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
            {сountry.topLevelDomain[0]}
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
            {сountry.latlng[0]}, {сountry.latlng[1]}
          </Typography>
        </div>

        {items
          .filter(item => сountry && сountry[item.field])
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
                {сountry[item.field]}
              </Typography>
            </div>
          ))}
      </Grid>
    </Grid>
  );
};
