import React, { useState } from "react";
import { Row, Input, Col, Icon } from "antd";
import { PayNowBtn } from "../ui/Buttons";
import Layout from "../layouts/Layout";
const CC = "CC";
const APPLE_PAY = "APPLE_PAY";
const PAY_AT_COUNTER = "PAY_AT_COUNTER";

export const Checkout = () => {
  const [method, setMethod] = useState(CC);

  return (
    <Layout>
      <div className="payment">
        <Row>
          <h1 className="txt-center txt-bold">Chose your payment method</h1>
        </Row>
        <Row className="payment-list" type="flex" justify="space-between">
          <Col span={12}>
            <Row className="payment-item">
              <Row className={`method ${method === CC ? "active" : ""}`}>
                <Row className="cc" onClick={() => setMethod(CC)}>
                  <Row>
                    <img
                      height="80px"
                      src="https://newsuptown.com/wp-content/uploads/2018/11/Visa-and-Mastercard-provide-tourist-card-fee-cut-in-EU-antitrust-probe.png"
                    />
                  </Row>
                  <Row
                    className="card-code"
                    type="flex"
                    justify="space-between"
                    gutter={16}
                  >
                    <Col span={6}>
                      <Input
                        maxLength={4}
                        className="code-input"
                        size="large"
                        placeholder="...."
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        maxLength={4}
                        className="code-input"
                        size="large"
                        placeholder="...."
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        maxLength={4}
                        className="code-input"
                        size="large"
                        placeholder="...."
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        maxLength={4}
                        className="code-input"
                        size="large"
                        placeholder="...."
                      />
                    </Col>
                  </Row>
                  <Row type="flex" justify="space-between" gutter={16}>
                    <Col span={12}>
                      <Input
                        className="text-input"
                        size="large"
                        placeholder="Name On Card"
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        className="text-input"
                        size="large"
                        placeholder="Expire"
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        className="text-input"
                        size="large"
                        placeholder="CCV"
                      />
                    </Col>
                  </Row>
                </Row>
              </Row>
            </Row>
          </Col>

          <Col span={6}>
            <Row className="payment-item">
              <Row
                className={`method ${method === APPLE_PAY ? "active" : ""}`}
                onClick={() => setMethod(APPLE_PAY)}
              >
                <img
                  width="150px"
                  src="https://img.icons8.com/cotton/2x/apple-pay.png"
                />
              </Row>
            </Row>
          </Col>
          <Col span={6}>
            <Row className="payment-item">
              <Row
                className={`method ${
                  method === PAY_AT_COUNTER ? "active" : ""
                }`}
                onClick={() => setMethod(PAY_AT_COUNTER)}
              >
                <h2 className="txt-center txt-bold">Pay at counter</h2>
              </Row>
            </Row>
          </Col>
        </Row>
        <h3 className="desc">
          Pay securely via credit card or one of our payment partners
        </h3>
        <Row className="total">
          <h3 className="title">TOTAL </h3>
          <h1 className="number">$40.47</h1>
        </Row>
        <Row type="flex" justify="center">
          <PayNowBtn />
        </Row>
      </div>
    </Layout>
  );
};

export default Checkout;
