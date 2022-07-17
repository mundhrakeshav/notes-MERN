import { Container, Row } from "react-bootstrap"

const MainScreen = ({ title, children }) => {
    return (
        <div className="main-screen">
            <Container>
                <Row>
                    <div className="page">
                        <h1 className="heading">{title}</h1>
                        <hr />
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MainScreen
