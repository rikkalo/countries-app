import { shallow } from "enzyme";
import React from "react";

import { Flag } from "./index";

describe("Flag", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Flag value="https://restcountries.eu/data/asm.svg" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
