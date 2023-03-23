import {
    Box, Container, Button, Grid,
    Tooltip
} from "@mui/material";
import Carousel from "nuka-carousel/lib/carousel.js";
import BannerItem, { bannerItems } from "./components/bannerItem.jsx";
import TooltipLinks from "./components/tooltips.jsx";
import Testimonial, { testimonials } from "./components/testimonial.jsx";
import { aboutLinks, volunteerLinks, programsLinks } from "./components/tooltips.jsx";
import NewsTiles, { news1, news2 } from "./components/news.jsx";
import { TKH, About, Volunteer, Programs, Contact } from "./components/footer.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        function showNav(e) {
            console.log(e);
            let scroll = e.target.defaultView.pageYOffset;
            if (scroll > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        window.addEventListener('scroll', showNav);

        return () => {
            window.removeEventListener('scroll', showNav)
        }
    }, []);

    function handleHover(e) {
        console.log(e);
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty("--x", x + "px");
        e.target.style.setProperty("--y", y + "px");
    }

    function handleStickyHover(e) {
        console.log(e);
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        e.target.style.setProperty("--x", x + "px");
        e.target.style.setProperty("--y", y + "px");
    }

    return (
        <div className="layout">

            {/* header */}
            <Box sx={{
                height: "14vh", padding: "2em 0em 1.5em 0em", display: "flex",
                alignItems: "center", justifyContent: "space-around", gap: "3em"
            }} >
                <img className="headerTitle" src="/images/title.png" />
                <Box sx={{ display: "flex", alignItems: "center" }} >
                    <div className="navLinks">
                        <Tooltip placement="bottom-start" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={aboutLinks} />} ><a href="https://www.theknowledgehouse.org/our_story/">About</a></Tooltip>
                        <Tooltip placement="bottom-end" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={volunteerLinks} />}><a href="https://www.theknowledgehouse.org/volunteer/">Get Involved</a></Tooltip>
                        <Tooltip placement="bottom-end" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={programsLinks} />}><a href="https://www.theknowledgehouse.org/apply/">Programs</a></Tooltip>
                        <a href="https://www.theknowledgehouse.org/contact/">Contact</a>
                    </div>
                    <Button sx={{
                        bgcolor: "#FFC20A", color: "#332459", fontWeight: "bold",
                        textTransform: "none", paddingX: "2.5em", fontSize: "16px",
                        borderRadius: "0", height: "30px", overflow: "hidden",
                        '&:hover': { color: "white", bgcolor: "#FFC20A" },
                        '&::before': {
                            content: "''", position: "absolute", borderRadius: "50%",
                            top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                            width: 0, height: 0, bgcolor: "#332459", transition: "width 0.4s, height 0.4s"
                        },
                        '&:hover::before': { width: "300px", height: "300px" }
                    }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/"><p style={{ position: "relative", zIndex: 1 }}>Donate</p></Button>
                </Box>
            </Box>

            {/* Scroll Header */}
            <Box sx={{
                height: "15vh", padding: "2em 0em 2em 0em", display: "flex",
                alignItems: "center", justifyContent: "space-around", gap: "3em",
                position: "fixed", top: "0", left: "0", bgcolor: "#291B4B",
                width: "100%", zIndex: show ? "2" : "-1", opacity: show ? "1" : "0", transition: "opacity 0.5s",
            }} >
                <img className="headerTitle" src="/images/title.png" />
                <Box sx={{ display: show ? "flex" : "none", alignItems: "center" }} >
                    <div className="navLinks">
                        <Tooltip placement="bottom-start" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={aboutLinks} />}  >
                            <a href="https://www.theknowledgehouse.org/our_story/">
                                About
                            </a>
                        </Tooltip>
                        <Tooltip placement="bottom-end" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={volunteerLinks} />} >
                            <a href="https://www.theknowledgehouse.org/volunteer/">
                                Get Involved
                            </a>
                        </Tooltip>
                        <Tooltip placement="bottom-end" TransitionProps={{ style: { transitionDuration: 400 } }} title={<TooltipLinks links={programsLinks} />} >
                            <a href="https://www.theknowledgehouse.org/apply/">
                                Programs
                            </a>
                        </Tooltip>
                        <a href="https://www.theknowledgehouse.org/contact/">
                            Contact
                        </a>
                    </div>
                    <Button sx={{
                        bgcolor: "#FFC20A", color: "#332459", fontWeight: "bold",
                        textTransform: "none", paddingX: "2.5em", fontSize: "16px",
                        borderRadius: "0", height: "30px", overflow: "hidden",
                        '&:hover': { color: "white", bgcolor: "#FFC20A" },
                        '&::before': {
                            content: "''", position: "absolute", borderRadius: "50%",
                            top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                            width: 0, height: 0, bgcolor: "#332459", transition: "width 0.4s, height 0.4s"
                        },
                        '&:hover::before': { width: "300px", height: "300px" }
                    }} onMouseMove={handleStickyHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/"><p style={{ position: "relative", zIndex: 1 }}>Donate</p></Button>
                </Box>
            </Box>

            {/* sub-header */}
            <Box sx={{
                bgcolor: "#FFB570", color: "#332459", display: "flex",
                alignItems: "center", justifyContent: "center", padding: "0.4em 0em 0.4em 3em",
                fontSize: "20px"
            }} >
                <p>Get updates as our movement grows!</p>
                <Button sx={{
                    bgcolor: "white", color: "inherit", textTransform: "none",
                    height: "6.5vh",
                    fontSize: "16px", marginX: "3em", '&:hover': { bgcolor: "lightgray" }
                }} variant="contained" disableElevation href="http://eepurl.com/dq4bnb" >Subscribe to our Newsletter</Button>
            </Box>

            {/* hero */}
            <div className="hero">
                <Box textAlign={"center"}>
                    <h1>Opportunities</h1>
                    <h1>For All</h1>
                </Box>
                <Button sx={{
                    bgcolor: "#FFC20A", color: "#332459", fontWeight: "bold",
                    textTransform: "none", paddingX: "3em", fontSize: "18px",
                    borderRadius: "0", height: "60px", overflow: "hidden",
                    '&:hover': { color: "white", bgcolor: "#FFC20A" },
                    '&::before': {
                        content: "''", position: "absolute", borderRadius: "50%",
                        top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                        width: 0, height: 0, bgcolor: "#332459", transition: "width 0.7s, height 0.7s"
                    },
                    '&:hover::before': { width: "700px", height: "700px" }
                }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/"><p style={{ position: "relative", zIndex: 1 }}>Donate Now</p></Button>
            </div>

            {/* banner */}
            <Container sx={{ width: "85%" }}>
                <Grid padding={"3em 4em"} container>
                    {
                        bannerItems.map((item, i) => {
                            return (
                                <Grid item sm={12} md={4} key={i}>
                                    <BannerItem {...item} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

            {/* Our Mission */}
            <Box sx={{ bgcolor: "white", height: "70vh", display: "flex", justifyContent: "center", fontFamily: "sans-serif", textAlign: "center" }} >
                <Box sx={{
                    bgcolor: "#FFC20A", width: "75%", display: "flex",
                    flexDirection: "column", alignItems: "center", justifyContent: "space-evenly",
                    padding: "3em", height: "110%", zIndex: "1", gap: "2em"
                }}>
                    <Container sx={{
                        bgcolor: "#332459", color: "white", padding: "0.5rem",
                        fontSize: "18px", width: "30%"
                    }}>
                        <h1>Our <span style={{ color: "#FFC20A" }}>Mission</span></h1>
                    </Container>
                    <Container sx={{
                        bgcolor: "#332459", color: "white", padding: "1em",
                        fontSize: "18px", lineHeight: "1.5"
                    }}>
                        <p>The Knowledge House empowers and sustains a talent pipeline of technologists, entrepreneurs, and digital leaders, who will uplift their communities out of poverty.</p>
                        <br />
                        <p>We are a social change organization. We educate, empower, and serve young people from low-income communities in New York, Newark, Atlanta, and Los Angeles with the technology and workplace skills needed to launch successful careers in the technology industry. We passionately believe that young people should have the chance to succeed regardless of their financial circumstances or ethnic background.</p>
                        <br />
                        <p>Through our digital skills programs, The Knowledge House is transforming the tech industry by building an army of talented workers equipped with the latest skills needed in today’s economy.</p>
                    </Container>
                </Box>
            </Box>

            {/* The Great Restoration */}
            <div className="restoration">
                <Box sx={{ width: "39.5%" }}>
                    <iframe style={{ width: "100%", aspectRatio: "16/9", border: "0px" }} allowFullScreen src="https://www.youtube.com/embed/W8lLg1u6HIo" />
                </Box>
                <Box sx={{ color: "white", width: "39.9%", lineHeight: "1.5", fontSize: "18px" }}>
                    <h1><span style={{ color: "#FFB570" }}>THE GREAT</span> RESTORATION</h1>
                    <p>Supporting a Talent-Driven Workforce</p>
                    <br />
                    <Box sx={{
                        bgcolor: "#FFB570", color: "#332459",
                        lineHeight: "1.5", padding: "1.5rem"
                    }}>
                        <p>This fall, The Knowledge House is fundraising $2,500,000 toward supporting our Fellows and our national expansion in New York City, Newark, Atlanta, and Los Angeles. Through the 2022 Fellowship Campaign, our fellows receive a lifetime opportunity to achieve their dreams as technologists.</p>
                        <br />
                        <p>The Great Restoration will ensure that The Knowledge House will continue to be the leader in our field and help develop the next generation of Black and Brown technologists.</p>
                        <br />
                        <Button sx={{
                            textTransform: "none", bgcolor: "white", color: "black",
                            '&:hover': { bgcolor: "lightgray" }, fontSize: "15px"
                        }} disableElevation variant="contained">Learn More about the Campaign</Button>
                    </Box>
                </Box>
            </div>

            {/* Student Testimonials */}
            <Box sx={{
                bgcolor: "#291B4B", color: "white", height: "110vh",
                fontFamily: "sans-serif", display: "flex", alignItems: "center",
                justifyContent: "center", paddingBottom: "3em"
            }}>
                <Carousel speed={1100} adaptiveHeight renderCenterLeftControls={{}} renderCenterRightControls={{}} renderBottomCenterControls={({ previousSlide, currentSlide, nextSlide }) => {
                    return (
                        <Box sx={{ wordSpacing: "0.5em", textAlign: "center", transform: `translate(-4em, 5em)` }}>
                            <p><Button onClick={previousSlide} sx={{
                                textTransform: "none", color: "white",
                                '&:hover': { bgcolor: "inherit", color: "lightgray" }
                            }}>BACK</Button> {currentSlide + 1}/2 <Button onClick={nextSlide} sx={{
                                textTransform: "none", color: "white",
                                '&:hover': { bgcolor: "inherit", color: "lightgray" }
                            }}>NEXT</Button></p>
                        </Box>
                    )
                }}>
                    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                        <Testimonial {...testimonials[0]} />
                    </Container>
                    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                        <Testimonial {...testimonials[1]} />
                    </Container>
                </Carousel>
            </Box>

            {/* Recent News */}
            <Box sx={{
                bgcolor: "white", height: "133vh", fontFamily: "sans-serif",
                textAlign: "center", fontSize: "18px", display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "0.5em"
            }}>
                <h1 style={{ fontWeight: "bold" }}><span style={{ color: "#584FA1" }}>Recent</span> News</h1>
                <p>Check out The Knowledge House in the news</p>
                <br />
                <Box sx={{
                    width: "60%", display: "flex", gap: "2px",
                    marginBottom: "1em", 
                }}>
                    {news1.map((news, i) => {
                        return (
                            <a style={{ flex: "1 1 0px", textDecoration: "none", color: "white" }} href={news.link} key={i}>
                                <NewsTiles {...news} />
                            </a>
                        )
                    })}
                </Box>
                <Box sx={{
                    width: "60%", display: "flex", gap: "2px",
                }}>
                    {news2.map((news, i) => {
                        return (
                            <a style={{ flex: "1 1 0px", textDecoration: "none", color: "white" }} href={news.link} key={i}>
                                <NewsTiles {...news} />
                            </a>
                        )
                    })}
                </Box>
            </Box>

            {/* Invest in a Fellow */}
            <Box sx={{
                height: "60vh", display: "flex", alignItems: "center",
                justifyContent: "center", paddingTop: "1em", gap: "3em",
                bgcolor: "#FFC20A", color: "#291B4B", fontSize: "42px",
                paddingX: "1em", paddingBottom: "1em"
            }}>
                <p style={{ width: "60%" }}>You can make an aspiring technologist's dreams come true. Invest in a fellow through one of our new monthly giving clubs today!</p>
                <Button sx={{
                    bgcolor: "#332459", color: "white", fontWeight: "bold",
                    paddingX: "1.5em", fontSize: "18px",
                    borderRadius: "0", height: "80px", overflow: "hidden",
                    '&:hover': { color: "#291B4B", bgcolor: "#291B4B" },
                    '&::before': {
                        content: "''", position: "absolute", borderRadius: "50%",
                        top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                        width: 0, height: 0, bgcolor: "white", transition: "width 0.7s, height 0.7s"
                    },
                    '&:hover::before': { width: "700px", height: "700px" }
                }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/"><p style={{ position: "relative", zIndex: 1 }}>INVEST IN A FELLOW</p></Button>
            </Box>

            {/* Footer */}
            <Box sx={{
                height: "90vh", display: "flex", alignItems: "center",
                gap: "2em", paddingX: "7em", justifyContent: "center"
            }}>
                <TKH />
                <Box sx={{ display: "flex", alignItems: "baseline", gap: "1em" }}>
                    <About />
                    <Volunteer />
                    <Programs />
                    <Contact />
                </Box>
            </Box>

            {/* Sub-Footer */}
            <Box sx={{
                height: "9vh", bgcolor: "#231740", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "sans-serif", fontSize: "13px", letterSpacing: "0.5px"
            }}>
                <a style={{ textDecoration: "none", color: "white", marginRight: "2em" }} href="https://www.theknowledgehouse.org/terms_of_use/">TERMS OF USE</a>
                <a style={{ textDecoration: "none", color: "white", marginRight: "1em" }} href="https://www.theknowledgehouse.org/privacy_policy/">PRIVACY POLICY</a>
                <p>© 2022 The Knowledge House</p>
            </Box>
        </div>
    )
}