import { shallow } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CountriesPage from "./index";

describe("CountriesPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Router>
        <CountriesPage />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render with data correctly", () => {
    const wrapper = shallow(
      <Router>
        <CountriesPage />
      </Router>
    );

    // expect(wrapper).toMatchSnapshot();
  });

  it("should render error", () => {
    const wrapper = shallow(
      <Router>
        <CountriesPage />
      </Router>
    );

    // expect(wrapper).toMatchSnapshot();
  });
});
