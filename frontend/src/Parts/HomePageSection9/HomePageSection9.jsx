import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function HomePageSection9() {
  return (
    <Container
      style={{
        width: "1440px",
        height: "190px",
        top: "3052px",
        position: "absolute",
      }}
    >
      <Row>
        <Col
          lg={{ offset: 2.5, span: 6, offset: 2.5 }}
          md={{ offset: 3, span: 6 }}
          sm={{ offset: 1, span: 10 }}
          style={{ top: "40px", position: "relative" }}
        >
          <h4 className="text-center mb-2">Subscribe on our newsletter</h4>
          <p className="pb-2 text-center mb-2">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>

          <Col
            lg={{ offset: 2, span: 8 }}
            md={{ offset: 3, span: 6 }}
            sm={{ offset: 1, span: 10 }}
            style={{ display: "flex" }}
          >
            <Col lg={8}>
              <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </Col>
            <Col lg={4}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ background: "blue", color: "White" }}
              >
                <i className="fa fa-envelope"></i> Subscribe
              </button>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
