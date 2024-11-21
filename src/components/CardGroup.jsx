import React from "react";
import { Card, Col, Row } from "antd";
import Tags from "./Tags";
const CardGroup = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="My major" bordered={false}>
        AI & ML Engineer
        <Tags />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="CV" bordered={false}>
        <p>
          I am currently working for Saigonchildren Charity to support children
          have a better education opportunity.
        </p>
        
        <a>Here is my CV 💖</a>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Contact for work" bordered={false}>
        <div style={{ display: "flex", flexDirection: "col", gap: "1rem" }}>
          <a>LinkedIn</a>
          <a>Github</a>
          <a>tctoan1024@gmail.com</a>
        </div>
      </Card>
    </Col>
  </Row>
);
export default CardGroup;
