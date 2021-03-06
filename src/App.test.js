import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";

describe("the full app:", () => {
  it("should render the full app", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should render the Header", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("should render the Landing page", () => {
    const { container } = render(<LandingPage />);
    expect(container).toBeInTheDocument();
  });

  it("should render the About", () => {
    const { container } = render(<Aboutme />);
    expect(container).toBeInTheDocument();
  });

  it("should render the projects", () => {
    const { container } = render(<Projects />);
    expect(container).toBeInTheDocument();
  });

  it("should render the Landing page", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
