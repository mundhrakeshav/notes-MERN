import { Button, Col, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <br />
      <br />
      <Container>
        <Col>
          <Row className="intro-text">
            <div>
              <h1>Welcome to notes</h1>
            </div>
          </Row>
          <Row>
            <Row className="button-container">
              <Col>
                <a href="/login">
                  <Button size="lg" className="login-button">
                    Login
                  </Button>
                </a>
              </Col>
              <Col>
                <a href="/register">
                  <Button
                    size="lg"
                    className="login-button"
                    variant="outline-primary"
                  >
                    SignUp
                  </Button>
                </a>
              </Col>
            </Row>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default LandingPage;
