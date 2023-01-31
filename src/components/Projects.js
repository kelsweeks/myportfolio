import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import soon from "../assets/img/soon.png";
import NFT from "../assets/img/NFT.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Current",
            description: "Full Stack Web App, Material UI",
            imgUrl: projImg1,
            link: "https://github.com/kelsweeks/ntry"
        },
        {
            title: "Anime Movie Database",
            description: "JavaScript, React",
            imgUrl: projImg2,
            link: "https://github.com/kelsweeks/anime-movie-app"
        },
        {
            title: "Tender",
            description: "JavaScript, React, Ruby on Rails, Tailwind",
            imgUrl: projImg3,
            link: "https://github.com/kelsweeks/tender"
        },
        {
            title: "True Friend",
            description: "Figma Product Design, Anima",
            imgUrl: projImg4,
            link: "https://www.figma.com/file/buky8lbwauDmNEqBVZgmvb/True-Friend-Front-End-Product-Design?node-id=0%3A29&t=BeqIRLTTdQXQ86kZ-1"
        },
        {
            title: "NFT Ranker",
            description: "JavaScript, React, Bootstrap",
            imgUrl: NFT,
            link: "https://www.figma.com/file/buky8lbwauDmNEqBVZgmvb/True-Friend-Front-End-Product-Design?node-id=0%3A29&t=BeqIRLTTdQXQ86kZ-1"
        },
        {
            title: "Zooted",
            description: "In Development",
            imgUrl: soon,
            link: "https://www.figma.com/file/buky8lbwauDmNEqBVZgmvb/True-Friend-Front-End-Product-Design?node-id=0%3A29&t=BeqIRLTTdQXQ86kZ-1"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Displayed below are several coding and design projects that showcase my technical and creative skills. These projects range from a full-stack web application to a mobile app and include features such as user authentication, RESTful APIs, and responsive design.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Photography</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            { projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>During my time at Flatiron School, I developed a strong interest in Product Design and learned to use Figma. This experience exposed me to the design thinking process and the importance of user-centered design in creating impactful digital products. I honed my skills in creating wireframes, prototypes, and design systems through hands-on projects and mentorship from industry professionals. I am eager to further develop my Product Design skills and bring my passion for creating user-friendly experiences to future projects.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>As a professional photographer for a decade, I honed my attention to detail, creativity, and problem-solving skills through capturing special moments and producing high-quality images. These skills are transferable to software engineering as they align with the need for precision in code and the ability to find creative solutions to technical challenges. Additionally, my experience managing a photography business has given me experience in project management, teamwork, and adapting to new technology, all of which are valuable in the software engineering industry.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
                </TrackVisibility>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
    </section>
)
}