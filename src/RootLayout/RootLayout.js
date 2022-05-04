import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Footer from "../Footer/Footer";
import AdminTemplate from "../AdminTemplate/AdminTemplate";
import Home from "../Home/Home";
import Designation from "../Designations/Designation";
import Employee from "../Employee/Employee";
import Navigation from "../Navigation/Navigation";
import Employees from "../Employee/Employee";

class RootLayout extends Component {
  state = {
    adminTemplate: true,
    home: false,
    Employees: false,
    Designation: false,
  };
  componentDidMount() {
    this.getResponse();
  }

  getResponse = async () => {
    const response = await fetch(
      "https://www.postman.com/collections/027f63bff89dd4c1d9a4"
    );
    const data = await response.json();
    console.log(data);
  };

  getChange = (value) => {
    switch (value) {
      case "adminTemplate":
        return this.setState({
          adminTemplate: true,
          home: false,
          Employees: false,
          designation: false,
        });
      case "home":
        return this.setState({
          adminTemplate: false,
          home: true,
          Employees: false,
          designation: false,
        });
      case "Employees":
        return this.setState({
          adminTemplate: false,
          home: false,
          Employees: true,
          designation: false,
        });
      case "designation":
        return this.setState({
          adminTemplate: false,
          home: false,
          Employees: false,
          designation: true,
        });
      default:
        return this.setState({
          adminTemplate: true,
          home: false,
          Employees: false,
          designation: false,
        });
    }
  };

  render() {
    const { adminTemplate, home, designation, Employees } = this.state;
    return (
      <>
        <Navigation dataChange={this.getChange} />
        {adminTemplate && <AdminTemplate />}
        {home && <Home />}
        {designation && <Designation />}
        {Employees && <Employee />}
        <Footer />
      </>
    );
  }
}

export default RootLayout;
