import { cleanup, render, waitForElement } from "@testing-library/react";
import axios from "axios";
import { shallow } from "enzyme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { countriesMock } from "../../mock";
import CountryPage from "./index";

jest.mock("axios");

afterEach(cleanup);

describe("CountryPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Router>
        <CountryPage />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render with data correctly", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: countriesMock });

    const { getByTestId } = render(
      <Router>
        <CountryPage />
      </Router>
    );

    const info = await waitForElement(() => getByTestId("country-info"));
    const name =
      info.firstElementChild?.textContent &&
      info.firstElementChild?.textContent.split(" ")[0];

    expect(name).toBe("BotswanaTop");
  });

  it("should render error", async () => {
    (axios.get as jest.Mock).mockRejectedValue({ response: { status: "404" } });

    const { getByTestId } = render(
      <Router>
        <CountryPage />
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
