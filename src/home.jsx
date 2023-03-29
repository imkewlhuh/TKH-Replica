import {
    Box, Container, Button, Grid,
    Tooltip
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Carousel from "nuka-carousel/lib/carousel.js";
import BannerItem, { bannerItems } from "./components/bannerItem.jsx";
import TooltipLinks from "./components/tooltips.jsx";
import Testimonial, { testimonials } from "./components/testimonial.jsx";
import { aboutLinks, volunteerLinks, programsLinks } from "./components/tooltips.jsx";
import NewsTiles, { news } from "./components/news.jsx";
import { TKH, About, Volunteer, Programs, Contact } from "./components/footer.jsx";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

export default function Home() {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main');

    useEffect(() => {
        function showNav(e) {
            let height = e.target.defaultView.pageYOffset;
            if (height > 100) {
                setShow(true);
                setScroll(height);
            } else {
                setShow(false);
                setScroll(height);
            };
        };

        window.addEventListener('scroll', showNav);

        return () => {
            window.removeEventListener('scroll', showNav)
        };
    }, []);

    function handleHover(e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty("--x", x + "px");
        e.target.style.setProperty("--y", y + "px");
    };

    function handleStickyHover(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        e.target.style.setProperty("--x", x + "px");
        e.target.style.setProperty("--y", y + "px");
    };

    return (
        <div className="layout">

            {/* Disclaimer */}
            <Box sx={{ display: { xs: "none", lg: "block" }, color: { xs: "black", lg: "white" }, textAlign: "center", bgcolor: { xs: "", lg: "#291B4B" }, padding: "0.5em", fontFamily: "sans-serif" }}>
                <h2>THIS IS A COPY OF THE KNOWLEDGE HOUSE HOME PAGE MADE BY A STUDENT. <a className="disclaimer" href="https://www.theknowledgehouse.org/">OFFICIAL SITE</a></h2>
            </Box>


            {/* header */}
            <Box sx={{
                height: "14vh", padding: "2em 0em 1.5em 0em", display: { xs: "none", lg: "flex" },
                alignItems: "center", justifyContent: "space-around", gap: "3em", position: !show ? "" : "fixed",
                top: "0", left: "0", width: "100%", bgcolor: !show ? "" : "#291B4B", zIndex: !show ? "1" : "3",
                transition: "all 0.5s"
            }} >
                <a href="/"><img className="headerTitle" src="/images/title.png" /></a>
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
                    }} onMouseMove={handleStickyHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/"><p style={{ position: "relative", zIndex: 1 }}>Donate</p></Button>
                </Box>
            </Box>


            {/* sub-header */}
            <Box sx={{
                bgcolor: "#FFB570", color: "#332459", display: { xs: "none", lg: "flex" },
                alignItems: "center", justifyContent: "center", padding: "0.4em 0em 0.4em 3em",
                fontSize: "20px", marginTop: !show ? "" : "14vh"
            }} >
                <p>Get updates as our movement grows!</p>
                <Button sx={{
                    bgcolor: "white", color: "inherit", textTransform: "none",
                    height: "6.5vh",
                    fontSize: "16px", marginX: "3em", '&:hover': { bgcolor: "lightgray" }
                }} variant="contained" disableElevation href="http://eepurl.com/dq4bnb" >Subscribe to our Newsletter</Button>
            </Box>


            {/* Mobile Header */}
            <Box sx={{
                height: "6em", padding: "2em 0em 1.5em 1em", display: { xs: "flex", lg: "none" },
                alignItems: "center", justifyContent: "flex-start", position: !show ? "absolute" : "fixed",
                top: "0", left: "0", width: "100%", bgcolor: !show ? "" : "#291B4B", zIndex: !show ? "1" : "3",
                transition: "all 0.5s"
            }}>
                <a href="/"><img className="headerTitle" src="/images/title.png" /></a>
                <div onClick={() => setOpenMenu(!openMenu)} className={`navBurger ${openMenu ? "open" : ""}`}>
                    <div className={`burgerTop ${openMenu ? "open" : ""}`}></div>
                    <div className={`burgerBottom ${openMenu ? "open" : ""}`}></div>
                </div>

                <div className={`navMenu ${openMenu ? "open" : ""}`}>
                    <Box sx={{ position: "absolute", top: "0", left: "0", width: "90%", color: { xs: "black", lg: "white" }, textAlign: "center", padding: "1em", fontFamily: "sans-serif" }}>
                        <h5>THIS IS A COPY OF THE KNOWLEDGE HOUSE HOME PAGE MADE BY A STUDENT. <a className="disclaimer" href="https://www.theknowledgehouse.org/">OFFICIAL SITE</a></h5>
                    </Box>
                    <CSSTransition classNames="menu-primary" in={activeMenu === "main"} timeout={500} unmountOnExit>
                        <div className="menu">
                            <a href="/" className="navItem">Home</a>
                            <div onClick={() => setActiveMenu("secondaryA")} className="navItem">About <NavigateNextIcon style={{ transform: "translateY(3px)" }} /></div>
                            <div onClick={() => setActiveMenu("secondaryV")} className="navItem">Get Involved <NavigateNextIcon style={{ transform: "translateY(3px)" }} /></div>
                            <div onClick={() => setActiveMenu("secondaryP")} className="navItem">Programs <NavigateNextIcon style={{ transform: "translateY(3px)" }} /></div>
                            <a href="https://www.theknowledgehouse.org/contact/" className="navItem">Contact</a>
                            <Button sx={{
                                bgcolor: "#FFC20A", color: "#332459", fontWeight: "bold",
                                textTransform: "none", padding: "1em", fontSize: "25px",
                                borderRadius: "0", height: "2.5em", overflow: "hidden",
                                '&:hover': { color: "white", bgcolor: "#FFC20A" },
                                '&::before': {
                                    content: "''", position: "absolute", borderRadius: "50%",
                                    top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                                    width: 0, height: 0, bgcolor: "#332459", transition: "width 0.4s, height 0.4s"
                                },
                                '&:hover::before': { width: "300px", height: "300px" }
                            }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.theknowledgehouse.org/donate/">
                                <p style={{ position: "relative", zIndex: 1 }}>Donate</p>
                            </Button>
                        </div>
                    </CSSTransition>
                    <CSSTransition classNames="menu-secondary" in={activeMenu === "secondaryA" || activeMenu === "secondaryV" || activeMenu === "secondaryP"} timeout={500} unmountOnExit>
                        <div className="menu">
                            <div onClick={() => setActiveMenu("main")} className="navItem"><NavigateBeforeIcon style={{ transform: "translateY(3px)" }} />Back</div>
                            {activeMenu === "secondaryA" ?
                                aboutLinks.map((link, i) => {
                                    return (
                                        <a href={link.link} key={i} className="navItem">{link.name}</a>
                                    )
                                })
                                : ""
                            }
                            {activeMenu === "secondaryV" ?
                                volunteerLinks.map((link, i) => {
                                    return (
                                        <a href={link.link} key={i} className="navItem">{link.name}</a>
                                    )
                                })
                                : ""
                            }
                            {activeMenu === "secondaryP" ?
                                programsLinks.map((link, i) => {
                                    return (
                                        <a href={link.link} key={i} className="navItem">{link.name}</a>
                                    )
                                })
                                : ""
                            }
                        </div>
                    </CSSTransition>
                </div>
            </Box>


            {/* hero */}
            <div className="hero">
                <Box sx={{ overflowX: "hidden", width: "100%" }} textAlign={"center"}>
                    <h1 style={{ transform: `translateX(-${scroll < 500 ? scroll : 450}px)`, transition: "transform 0.1s linear" }}>Opportunities</h1>
                    <h1 style={{ transform: `translateX(${scroll < 500 ? scroll : 450}px)`, transition: "transform 0.1s linear" }}>For All</h1>
                </Box>
                <Button sx={{
                    bgcolor: "#FFC20A", color: "#332459", fontWeight: "bold",
                    textTransform: "none", paddingX: "3em", fontSize: "18px",
                    borderRadius: "0", height: "60px", overflow: "hidden",
                    display: openMenu ? "none" : "",
                    '&:hover': { color: "white", bgcolor: "#FFC20A" },
                    '&::before': {
                        content: "''", position: "absolute", borderRadius: "50%",
                        top: "var(--y)", left: "var(--x)", transform: "translate(-50%, -50%)",
                        width: 0, height: 0, bgcolor: "#332459", transition: "width 0.7s, height 0.7s"
                    },
                    '&:hover::before': { width: "700px", height: "700px" }
                }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.classy.org/give/420187/#!/donation/checkout"><p style={{ position: "relative", zIndex: 1 }}>Donate Now</p></Button>
            </div>


            {/* banner */}
            <Container sx={{ width: "85%" }}>
                <Grid data-aos="fade" data-aos-duration="1000" padding={"3em 4em"} container>
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
            <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", fontFamily: "sans-serif", textAlign: "center" }} >
                <Box data-aos="fade" data-aos-duration="700" sx={{
                    bgcolor: "#FFC20A", width: { xs: "100%", md: "80%" }, display: "flex",
                    flexDirection: "column", alignItems: "center", justifyContent: "space-around",
                    padding: "3em", gap: "2em"
                }}>
                    <Container data-aos="fade" data-aos-duration="1000" sx={{
                        bgcolor: "#332459", color: "white", padding: "0.5rem",
                        width: { xs: "100%", md: "30%" }
                    }}>
                        <h1>Our <span style={{ color: "#FFC20A" }}>Mission</span></h1>
                    </Container>
                    <Container data-aos="fade" data-aos-duration="1000" sx={{
                        bgcolor: "#332459", color: "white", padding: "1em",
                        lineHeight: "1.5"
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
                <Box sx={{ flex: "1 1 30%" }}>
                    <iframe className="video" allowFullScreen src="https://www.youtube.com/embed/W8lLg1u6HIo" />
                </Box>
                <Box sx={{ color: "white", flex: "1 1 30%", lineHeight: "1.5", fontSize: "18px" }}>
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
                bgcolor: "#291B4B", color: "white", minHeight: "110vh",
                fontFamily: "sans-serif", display: "flex", alignItems: "center",
                justifyContent: "center", padding: "10em"
            }}>
                <div className="carousel" data-aos="fade" data-aos-duration="1000">
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
                        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: { xs: "column", md: "row" }, gap: { xs: "2em", lg: "0em" } }}>
                            <Testimonial {...testimonials[0]} />
                        </Container>
                        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: { xs: "column", md: "row" }, gap: { xs: "2em", lg: "0em" } }}>
                            <Testimonial {...testimonials[1]} />
                        </Container>
                    </Carousel>
                </div>
            </Box>


            {/* Recent News */}
            <Box sx={{
                bgcolor: "white", minHeight: "133vh", fontFamily: "sans-serif",
                textAlign: "center", fontSize: "18px", display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "0.5em", padding: "2em"
            }}>
                <h1 style={{ fontWeight: "bold" }}><span style={{ color: "#584FA1" }}>Recent</span> News</h1>
                <p>Check out The Knowledge House in the news</p>
                <br />
                <Box sx={{
                    width: "80%", display: "flex", rowGap: "2em",
                    flexWrap: "wrap", columnGap: "2px",
                }}>
                    {news.map((news, i) => {
                        return (
                            <a style={{ flex: "1 1 30%", textDecoration: "none", color: "white" }} href={news.link} key={i}>
                                <NewsTiles {...news} />
                            </a>
                        )
                    })}
                </Box>
            </Box>


            {/* Invest in a Fellow */}
            <Box sx={{
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: "3em",
                bgcolor: "#FFC20A", color: "#291B4B", fontSize: { xs: "25px", sm: "42px" },
                padding: "2em", flexDirection: { xs: "column", md: "row" }
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
                }} onMouseMove={handleHover} variant="contained" disableElevation href="https://www.classy.org/give/420187/#!/donation/checkout"><p style={{ position: "relative", zIndex: 1 }}>INVEST IN A FELLOW</p></Button>
            </Box>


            {/* Footer */}
            <Box sx={{
                display: "flex", alignItems: "center",
                gap: "4em", padding: "7em", justifyContent: "center",
                flexDirection: { xs: "column", lg: "row" }
            }}>
                <TKH />
                <Box sx={{
                    display: "flex", alignItems: { xs: "center", md: "baseline" }, gap: "1em",
                    flexDirection: { xs: "column", md: "row" }
                }}>
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
                fontFamily: "sans-serif", fontSize: { xs: "8px", sm: "13px" }, letterSpacing: "0.5px"
            }}>
                <a className="footerLinks" style={{ marginRight: "2em" }} href="https://www.theknowledgehouse.org/terms_of_use/">TERMS OF USE</a>
                <a className="footerLinks" style={{ marginRight: "1em" }} href="https://www.theknowledgehouse.org/privacy_policy/">PRIVACY POLICY</a>
                <p>© 2022 The Knowledge House</p>
            </Box>

        </div>
    )
};