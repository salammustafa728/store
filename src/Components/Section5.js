import "./Section5.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section5 = () => {
  return (
    <div className="dicCont">
      <Container>
        <Row >
          <Col xs={6} md={4}>
            <div className="div15">
              <Image
                className="imgMenu11"
                style={{}}
                src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/94c2501145a051d9ac5572f4/e54b04ff-7e70-4e45-a3b4-d6b43c5616c3.jpeg"
                rounded
              />
             
            </div>
          </Col>
          <Col xs={6} md={4}>
          <div className="pe">
                <p className="pdiv1">M F E I A S T H AND</p>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="div15">
              <Image
                className="imgMenu21"
                style={{}}
                src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1eb3bebb56375728b81f140f/b270865f-bd3a-4578-8054-7a8722565915.jpeg"
                rounded
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
