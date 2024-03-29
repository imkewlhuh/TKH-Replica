import { Box } from "@mui/material";

export const bannerItems = [
    {title: "WE SERVE", img: "/images/We_Serve.png", desc: "We have served over 1900 Black and Brown aspiring technologists, since our inception."},
    {title: "WE EMPOWER", img: "/images/We_Empower.png", desc: "Our fellows acquire skills that empower them to navigate career pathways in tech."},
    {title: "WE EDUCATE", img: "/images/We_Educate.png", desc: "We support our fellows with technical and career instruction toward rewarding careers."}
];

export default function BannerItem(props) {
    return (
        <Box sx={{
            display: "flex", alignItems: {xs: "center", lg:"flex-start"}, flexDirection: {xs: "column", lg: "row"},
            lineHeight: "1.5", gap: "1em", padding: "1em", textAlign: {xs: "center", lg: "left"}, flexWrap: {xs: "wrap", lg: "nowrap"}
            }}>
            <img className="bannerImg" src={props.img} />
            <Box sx={{
                display: "flex", flexDirection: "column", fontFamily: "sans-serif",
                width: {xs: "100%", md: "50%"}
                }}>
                <h3 style={{color: "#FFC20A", fontSize: "20px"}}>{props.title}</h3>
                <p style={{color: "white"}}>{props.desc}</p>
            </Box>
        </Box>
    )
};