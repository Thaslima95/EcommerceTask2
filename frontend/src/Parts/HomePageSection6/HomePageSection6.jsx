import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";

export default function HomePageSection6() {
  const [products, setProducts] = useState([]);
  useMemo(() => {
    ApiCalls.getProductswithlimit(10)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container
      style={{
        width: "1180px",
        height: "696px",
        top: "1856px",
        left: "130px",
        position: "absolute",
      }}
    >
      <Card
        style={{
          width: "242px",
          height: "32px",
          // top: 1856px
          // left: 131px
          border: "none",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H3;
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
          }}
        >
          Recommended items
        </Typography>
      </Card>
      <Col
        lg={2}
        style={{
          width: "1180px",
          height: "640px",
          // top: 1912px
          // left: 130px
          // border: "1px solid red",
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((e) => {
          return (
            <Link to={`/single/${e.id}`}>
              <Card
                // style={{
                //   width: "1180px",
                //   height: "640px",
                //   // top: 1912px
                //   // left: 130px
                //   border: "1px solid red",
                // }}
                style={{
                  width: "220px",
                  height: "310px",
                  // top: 1912px
                  // left: 130px
                  // border: "1px solid blue",
                  border: "none",
                }}
              >
                <Card.Img
                  style={{
                    width: "200px",
                    height: "200px",
                    top: "9px",
                    left: "10px",
                    position: "relative",
                    padding:
                      "14.222222328186035px 24.88888168334961px 15.11112117767334px 24.88888931274414px",
                  }}
                  src={e.image}
                />
                <Card.Title
                  style={{
                    width: "65.53191375732422px",
                    height: "21.239286422729492px",
                    // top: 223px
                    // left: 16px
                  }}
                >
                  <Typography
                    style={{
                      //styleName: Text-title;
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      letterSpacing: "0px",
                      textAlign: "left",
                    }}
                  >
                    {e.price}
                  </Typography>
                </Card.Title>
                <Card.Title
                  style={{
                    width: "186px",
                    height: "53px",
                    // top: 248.13571166992188px
                    // left: 16.01214599609375px
                  }}
                >
                  <Typography
                    style={{
                      //styleName: Text-info;
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.20000000298023224px",
                      textAlign: "left",
                    }}
                  >
                    {e.title.substring(0, 20)}
                  </Typography>
                </Card.Title>
              </Card>
            </Link>
          );
        })}
      </Col>
    </Container>
  );
}
