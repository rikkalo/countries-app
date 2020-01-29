import { shallow } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RegionsPage from "./index";

describe("RegionsPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Router>
        <RegionsPage />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
