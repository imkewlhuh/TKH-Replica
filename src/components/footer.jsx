import { Box } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { SocialIcon } from "react-social-icons";
import { aboutLinks, volunteerLinks, programsLinks } from "./tooltips.jsx";

export function TKH() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", transform: "translate(0.2em, -1em)" }}>
            <img src="/images/logo-2.png" />
            <Box sx={{ display: "flex", gap: "5px" }}>
                <SocialIcon bgColor="white" style={{ height: "35px", width: "35px" }} url="https://www.youtube.com/channel/UChfWv3rKwkaH_nbPrQPkH6w" />
                <SocialIcon bgColor="white" style={{ height: "35px", width: "35px" }} url="https://www.linkedin.com/school/theknowledgehouse/" />
                <SocialIcon bgColor="white" style={{ height: "35px", width: "35px" }} url="https://www.facebook.com/theknowledgehouse/" />
                <SocialIcon bgColor="white" style={{ height: "35px", width: "35px" }} url="https://www.instagram.com/theknowledgehouse/?hl=en" />
                <SocialIcon bgColor="white" style={{ height: "35px", width: "35px" }} url="https://twitter.com/theknowledgehou?lang=en" />
            </Box>
        </Box>
    )
};

export function About() {
    return (
        <Box sx={{
            color: "white", fontSize: "18px", fontFamily: "sans-serif",
            lineHeight: "1.5", display: "flex", flexDirection: "column",
            gap: "0.5em"
        }}>
            <h3 style={{transform: "translate(-0.5em ,-0.5em)"}}>About</h3>            
            {aboutLinks.map((about, i) => {
                return (
                    <Box sx={{ display: "flex", fontSize: "16px", width: "17ch" }} key={i}>
                        <NavigateNextIcon sx={{ height: "16px", transform: "translate(-5px, 3px)" }} /> 
                        <a className="footerLinks" href={about.name === "Our Story" ? "https://www.theknowledgehouse.org/our_story/" : about.link}>{about.name === "News" ? "News and Events" : about.name}</a>
                    </Box>
                )
            })}
        </Box>
    )
};

export function Volunteer() {
    return (
        <Box sx={{
            color: "white", fontSize: "18px", fontFamily: "sans-serif",
            lineHeight: "1.5", display: "flex", flexDirection: "column",
            gap: "0.5em"
        }}>
            <h3 style={{transform: "translate(-0.5em ,-0.5em)"}}>Get Involved</h3>            
            {volunteerLinks.map((volunteer, i) => {
                return (
                    <Box sx={{ display: "flex", fontSize: "16px", width: "19ch" }} key={i}>
                        <NavigateNextIcon sx={{ height: "16px", transform: "translate(-5px, 3px)" }} /> 
                        <a className="footerLinks" href={volunteer.name}>{volunteer.name}</a>
                    </Box>
                )
            })}
        </Box>
    )
};

export function Programs() {
    return (
        <Box sx={{
            color: "white", fontSize: "18px", fontFamily: "sans-serif",
            lineHeight: "1.5", display: "flex", flexDirection: "column",
            gap: "0.5em"
        }}>
            <h3 style={{transform: "translate(-0.5em ,-0.5em)"}}>Programs</h3>            
            {programsLinks.map((program, i) => {
                return (
                    <Box sx={{ display: "flex", fontSize: "16px", width: "19ch" }} key={i}>
                        <NavigateNextIcon sx={{ height: "16px", transform: "translate(-5px, 3px)" }} /> 
                        <a className="footerLinks" href={program.name}>{program.name}</a>
                    </Box>
                )
            })}
        </Box>
    )
};

export function Contact() {
    return (
        <Box sx={{
            color: "white", fontSize: "18px", fontFamily: "sans-serif",
            lineHeight: "1.5", display: "flex", flexDirection: "column",
            gap: "0.5em"
        }}>
            <h3 style={{transform: "translate(-0.5em ,-0.5em)"}}>Contact Info</h3>            
            <Box sx={{display: "flex", gap: "0.5em", fontSize: "14px"}}>
            <LocationOnIcon sx={{color: "#FFC20A", height: "25px"}} />
                <p>363 Rider Avenue, 3rd Floor Bronx, NY 10451</p>
            </Box>
            <Box sx={{display: "flex", gap: "0.5em", fontSize: "14px"}}>
            <EmailIcon sx={{color: "#FFC20A", height: "25px"}} /> 
                <p>info@theknowledgehouse.org</p>
            </Box>
            <Box sx={{display: "flex", gap: "0.5em", fontSize: "14px"}}>
            <AccessTimeIcon sx={{color: "#FFC20A", height: "25px"}} /> 
                <p>Office Hours TBD due to COVID</p>
            </Box>
        </Box>
    )
}