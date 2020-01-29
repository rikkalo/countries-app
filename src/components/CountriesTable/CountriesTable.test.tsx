import { shallow } from "enzyme";
import React from "react";

import { countriesMock } from "../../mock";
import { CountriesTable } from "./index";

describe("CountriesTable", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<CountriesTable countries={countriesMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
