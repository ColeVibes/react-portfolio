import { Grid } from "@mui/material";
import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { setCurrentNav, currentNav, contactSelected, setContactSelected } =
        props;

    return (
        <Grid
            container
            direction="column"
            justify-content="center"
            alignItems="center"
            id="header"
        >
            <Grid item xs={12} id="hero" mt={3}>
                <h1 id="my-name">Cole Johnson</h1>
                <h2 id="subtitle">Full-Stack Web Engineer</h2>
            </Grid>
            <Grid item xs={12} mt={3} mb={10}>
                <Nav
                    setCurrentNav={setCurrentNav}
                    currentNav={currentNav}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                ></Nav>
            </Grid>
        </Grid>
    );
}

export default Header;