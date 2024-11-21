import React from "react";
import { Divider, Flex, Tag } from "antd";
const Tags = () => (
  <>
    <Divider orientation="left">Base skills</Divider>
    <Flex gap="4px 0" wrap>
      <Tag color="magenta">Computer Vision</Tag>
      <Tag color="red">CLIP</Tag>
      <Tag color="volcano">NLP</Tag>
      <Tag color="orange">Neural network</Tag>
    </Flex>
    <Divider orientation="left">Projects</Divider>
    <Flex gap="4px 0" wrap>
      <Tag
        color="#f50"
        onClick={() => {
          window.open("https://github.com/lochuung/carex");
        }}
      >
        Yoga MoveNet
      </Tag>
    </Flex>
  </>
);
export default Tags;
