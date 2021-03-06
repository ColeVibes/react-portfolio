import React from "react";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    return (
        <Grid
            container
            alignItems="center"
            id="contact-info"
            justifyContent="center"
            mt={10}
        >
            <Grid item xs={12} md={2} p={2}>
                <h2 id="contact-title">Say hello</h2>
            </Grid>

            <Grid item xs={12} md={2} p={2}>
                262.305.4411
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://www.linkedin.com/in/cole-johnson-48b832224/"
                    >
                        LinkedIn
                    </a>
                </Grid>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://github.com/colevibes"
                    >
                        Github
                    </a>
                </Grid>

                <Grid item>
                    <GitHubIcon />
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} p={2} container>
                <Grid item pr={1}>
                    <a
                        className="contact-anchor"
                        href="https://www.instagram.com/cole.johnson2426/"
                    >
                        Instagram
                    </a>
                </Grid>
                <Grid item>
                    <InstagramIcon />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;