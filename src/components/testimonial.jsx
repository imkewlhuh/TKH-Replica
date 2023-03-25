import { Box, Avatar } from "@mui/material";

export const testimonials = [
    {
        img: "/images/jahaziel.png",
        name: "Jahaziel Israel",
        quote: "Prior to TKH, I was facing stagnation in my career as an event manager. Thankfully I completed the Innovation Fellowship in 2020 and soon after completed six months of a Google Android Developer Program, where I discovered my technical superpower in Program/Product Management. I now have the pleasure of working at TKH as a Technical Project Manager.",
        title: "Technical Project Manager at The Knowledge House"
    },
    {
        img: "images/kamili.png",
        name: "Kamili Saint-leger",
        quote: "TKH opened me up to a world that I didn't think was possible without going to college first. I've met people and made connections I could have never dreamed of, and I'm now in a better place than if I had just gone straight to college. It was a great way to learn what I wanted to do with my life without spending thousands of dollars on a degree first.",
        title: "Snap Lens Academy Scholar at Snap Inc."
    }
]

export default function Testimonial(props) {
    return (
        <>
            <Avatar sx={{height: {xs: "5em", sm: "12em", md: "30vh"}, width: {xs: "5em", sm: "12em", md: "30vh"}}} alt={props.name} src={props.img} />
            <Box sx={{width: {xs: "90%", md: "38%"}, fontSize: {sm: "18px"}}}>
                <h1><span style={{ color: "#FFC20A" }}>WHAT OUR</span> STUDENTS HAVE TO SAY</h1>
                <br />
                <br />
                <Box sx={{
                    lineHeight: "1.5"
                }}>
                    <p>"{props.quote}"</p>
                    <br />
                    <br />
                    <p>{`- ${props.name}`}</p>
                    <p>{props.title}</p>
                </Box>
            </Box>
        </>
    )
}