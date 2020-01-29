import { shallow } from "enzyme";
import React from "react";

import { ListWithTitle } from "./index";

describe("ListWithTitle", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <ListWithTitle title="Example list">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ListWithTitle>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
