import { cleanup, render, waitForElement } from "@testing-library/react";
import axios from "axios";
import { shallow } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { countriesMock } from "../../mock";
import CountriesPage from "./index";

jest.mock("axios");

afterEach(cleanup);

describe("CountriesPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Router>
        <CountriesPage />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render with data correctly", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: countriesMock });

    const { getByTestId } = render(
      <Router>
        <CountriesPage />
      </Router>
    );

    const info = await waitForElement(() => getByTestId("countries-list"));
    const namePage =
      info.firstElementChild?.textContent &&
      info.firstElementChild?.textContent.split(" ")[0];

    expect(namePage).toBe("Countries");
  });

  it("should render error", async () => {
    (axios.get as jest.Mock).mockRejectedValue({ response: { status: "404" } });

    const { getByTestId } = render(
      <Router>
        <CountriesPage />
      </Router>
    );

    const errorAlert = await waitForElement(() => getByTestId("error-message"));

    const goToMainPage = await waitForElement(() =>
      getByTestId("go-to-main-page")
    );

    expect(errorAlert.textContent).toBe("Status error: 404");
    expect(goToMainPage.textContent).toBe("Go to the main page");
  });
});
