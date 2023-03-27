import { Box } from "@mui/material";

export const aboutLinks = [
    {name: "Our Story", link: "https://www.theknowledgehouse.org/our_story/#section1"},
    {name: "Team", link: "https://www.theknowledgehouse.org/team_and_supporters/"},
    {name: "News", link: "https://www.theknowledgehouse.org/news/"},
    {name: "Our 2021 Impact", link: "https://www.theknowledgehouse.org/impact2021/"}
];

export const volunteerLinks = [
    {name: "Join the Club", link: "https://www.theknowledgehouse.org/join_the_club/"},
    {name: "Annual Partnerships", link: "https://www.theknowledgehouse.org/annual_partnerships/"},
    {name: "Volunteer Opportunities", link: "https://www.theknowledgehouse.org/volunteer/"},
    {name: "Talent Acquisitions", link: "https://www.theknowledgehouse.org/hire/"},
    {name: "Join the Team", link: "https://www.theknowledgehouse.org/jobs/"}
];

export const programsLinks = [
    {name: "Programs Overview", link: "https://www.theknowledgehouse.org/apply/"},
    {name: "Karim Kharbouch Fellowship", link: "https://www.theknowledgehouse.org/karim_kharbouch_coding_fellowship"},
    {name: "Innovation Fellowship", link: "https://www.theknowledgehouse.org/innovation_fellowship/"}
];

export default function TooltipLinks(props) {
    const links = props.links;

    return (
        <Box sx={{
            bgcolor: "white", padding: "2em", display: "flex",
            flexDirection: "column", gap: "1em", fontSize: "16px",
            width: "270px", transform: "scale(1.1)"
            
        }}>
            {links.map((link, i) => {
                return (
                    <a className="toolLink" key={i} href={link.link}>{link.name}</a>
                )
            })}
        </Box>
    )
};