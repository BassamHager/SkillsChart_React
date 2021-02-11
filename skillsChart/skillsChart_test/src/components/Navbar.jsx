import React from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/radar">
      <Button btnTxt="Radar" />
    </Link>
    <Link to="/bar">
      <Button btnTxt="Bar" />
    </Link>
  </nav>
);

export default Navbar;
