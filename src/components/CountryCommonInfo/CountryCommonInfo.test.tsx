import { shallow } from "enzyme";
import React from "react";

import { countryMock } from "../../mock";
import { CountryCommonInfo } from "./index";

describe("CountryCommonInfo", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<CountryCommonInfo country={countryMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
