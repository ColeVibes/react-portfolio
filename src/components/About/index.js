import React from "react";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

function About() {
    return (
        <Grid
            container
            direction="column"
            justify-content="center"
            alignItems="center"
            id="react-card"
            wrap="wrap"
        >
            <Grid item p={2} fontSize={25}>
                <h2 id="about-title">About Me</h2>
            </Grid>
            <Grid item p={2}>
                {/* <Avatar
                    src={require("../../assets/Profile Picture.PNG")}
                    alt="about me"
                    sx={{ width: 150, height: 150 }}
                /> */}
            </Grid>
            <Grid item id="about-para" p={2}>
                Full-Stack Web Engineer with a Certificate in Full-Stack Coding
                from the University of Wisconsin-Madison (May 2022), with a
                background in Hospitaliy and service. I am experienced
                creating applications with MongoDB, Express, React and Node.
                Hoping to contribute to a sustainable company that cares about
                corporate-social responsibility and encourages team members to
                explore their passions for tech. In addition to my newly
                developed full-stack skills, I’m looking to leverage my strong problem-solving,
                communication, teamwork and leadership skills gained from
                managing a professional kitchen for over 4 years.
            </Grid>
        </Grid>
    );
}

export default About;