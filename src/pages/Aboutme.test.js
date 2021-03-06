import React from "react";
import { render, screen } from "@testing-library/react";
import Aboutme from "./Aboutme";

describe("Aboutme of the site:", () => {
  it("should render Aboutme with all the information in it", () => {
    const { container } = render(<Aboutme />);
    expect(container).toMatchSnapshot();
  });

  it("should render the picture of Arshad shah", () => {
    render(<Aboutme />);
    const pictureOfArshad = screen.getByLabelText("Picture of Arshad shah.");
    expect(pictureOfArshad).toBeInTheDocument();
  });

  it("should render the 'Certificates:' heading in aboutme", () => {
    render(<Aboutme />);
    const headingInsideTheText = screen.getByText("Certificates:");
    expect(headingInsideTheText).toBeInTheDocument();
  });
});
