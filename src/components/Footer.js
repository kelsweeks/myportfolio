import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import templogo1 from "../assets/img/templogo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailChimpForm />
                    <Col size={12} sm={6}>
                        <img src={templogo1} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kelseyweeks"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/kelsweeks"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/kelsweeks"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}