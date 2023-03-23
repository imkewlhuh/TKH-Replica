import { Box } from "@mui/material";

export const bannerItems = [
    {title: "WE SERVE", img: "/images/We_Serve.png", desc: "We have served over 1900 Black and Brown aspiring technologists, since our inception."},
    {title: "WE EMPOWER", img: "/images/We_Empower.png", desc: "Our fellows acquire skills that empower them to navigate career pathways in tech."},
    {title: "WE EDUCATE", img: "/images/We_Educate.png", desc: "We support our fellows with technical and career instruction toward rewarding careers."}
];

export default function BannerItem(props) {
    return (
        <Box sx={{
            display: "flex", alignItems: "flex-start", 
            lineHeight: "1.5", gap: "1em", paddingX: "1em"
            }}>
            <img style={{height: "89px"}} src={props.img} />
            <Box sx={{
                display: "flex", flexDirection: "column", fontFamily: "sans-serif"
                }}>
                <h3 style={{color: "#FFC20A", fontSize: "20px"}}>{props.title}</h3>
                <p style={{color: "white"}}>{props.desc}</p>
            </Box>
        </Box>
    )
}