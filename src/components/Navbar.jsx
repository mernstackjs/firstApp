import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, ListItemText, MenuItem, MenuList } from "@mui/material";
import "./main.css";
function Navbar() {
  return (
    <header className="header">
      <Toolbar>
        <ListItemText className="textLogo">
          {" "}
          <Link className="link" to="/">
            BrandName
          </Link>
        </ListItemText>

        <MenuList sx={{ display: "flex" }}>
          {["Home", "Book-List", "Add-Book"].map((link, index) => (
            <Link key={index} className="link" to={link}>
              <MenuItem>{link}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Toolbar>
    </header>
  );
}

export default Navbar;
