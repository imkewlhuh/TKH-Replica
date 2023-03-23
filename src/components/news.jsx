import { Box } from "@mui/material";

export const news = [
    {
        img: "/images/npt.jpg",
        title: "New Profit invests in six social entrepreneurs expanding opportunities in America",
        link: "https://www.newprofit.org/go/new-profit-invests-in-six-social-entrepreneurs-expanding-opportunity-in-america/?utm_campaign=Investment%20Announcements&utm_medium=email&_hsmi=232226056&_hsenc=p2ANqtz-82"
    },
    {
        img: "/images/be.jpeg",
        title: "TKH LAUNCHES ITS 2022-23 FELLOWSHIP CAMPAIGN TO INCREASE TECH WORKFORCE NATIONWIDE",
        link: "https://www.blackenterprise.com/the-great-restoration-the-knowledge-house-launches-its-2022-23-fellowship-campaign-to-increase-tech-workforce-nationwide/"
    },
    {
        img: "/images/bk12.png",
        title: "Local organization offers fellowship for Black and brown students entering tech industry",
        link: "https://brooklyn.news12.com/local-organization-offers-fellowship-for-black-and-brown-students-entering-tech-industry"
    },
    {
        img: "/images/yahoo.jpg",
        title: "The Great Restoration: TKH Launches its 2022- 23 Fellowship Campaign to Increase Tech Workforce Nationwide.",
        link: "https://finance.yahoo.com/news/great-restoration-knowledge-house-launches-123400525.html?guccounter=1"
    },
    {
        img: "/images/bloomberg.jpeg",
        title: "Bloomberg engineers prepare TKH Fellows for careers in Tech",
        link: "https://www.bloomberg.com/company/stories/bloomberg-engineers-prepare-knowledge-house-fellows-tech-careers/"
    },
    {
        img: "/images/ls.jpg",
        title: "RESTREAM: Bronx Gigabit Launch Center Event",
        link: "https://livestream.com/accounts/686369/events/10472530/videos/231619029"
    }
];

export default function NewsTiles(props) {
    return (
            <Box sx={{ 
                backgroundImage: `url(${props.img})`, height: "210px", display: "flex", 
                alignItems: "center", backgroundSize: "cover", backgroundPosition: "center",
                backgroundColor: "rgb(0, 0, 0, 0.8)", backgroundBlendMode: "darken",
                padding: "1em", minWidth: "260px", lineHeight: "1.5", justifyContent: "center"
                }}>
                <p style={{fontWeight: "bold"}}>{props.title}</p>
            </Box>
    )
}