import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";
import { useState } from "react";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);

  useMemo(() => {
    ApiCalls.getCategorisProductswithlimit(6)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>Related Products</Row>
      <Row>
        {products.map((e, index) => (
          <Col lg={2} md={5} sm={7}>
            {console.log(e.image)}
            <Card
              className="d-flex flex-col justify-content-between"
              style={{ border: "none" }}
            >
              <Card.Body className="">
                <Card.Img
                  style={{
                    width: "200px",
                    height: "200px",
                    paddingLeft: "10px",
                    // border: "2px solid red",
                  }}
                  variant="top"
                  src={e.image}
                />
                <div className="d-flex flex-row justify-content-start">
                  <div className="mb-3 text-left">
                    <b>${e.price}</b>
                    <br />
                    {e.title.substring(0, 20)}
                    <br />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
