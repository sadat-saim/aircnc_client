import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="border-b-[1px] border-gray-300">
      <Navbar fluid={true} className="container mx-auto" rounded={true}>
        <Link to="/">
          <img src={logo} className="mr-3 h-10" alt="Flowbite Logo" />
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="text-center">
          <Link className="hover:text-lime-300 block my-auto" to="/">
            Host your home
          </Link>
          <Link className="hover:text-lime-300 block my-auto" to="/">
            Host your experience
          </Link>
          <Link className="hover:text-lime-300 block my-auto" to="/">
            Help
          </Link>
          <Link className="hover:text-lime-300 block my-auto" to="/">
            Log in
          </Link>
          <Link className="hover:text-lime-300" to="/">
            <Button
              className="bg-gradient-to-r from-lime-400 block mx-auto to-green-300"
              pill={true}
            >
              Sign up
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
