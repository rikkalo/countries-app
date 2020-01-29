import { shallow } from "enzyme";
import React from "react";

import { GoToMain } from "./index";

describe("GoToMain", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<GoToMain />);

    expect(wrapper).toMatchSnapshot();
  });
});
