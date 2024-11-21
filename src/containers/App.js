import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import ProjectCard from "../components/ProjectCard";
import Info from "../components/Info/Info";
import CardGroup from "../components/CardGroup";
import Projects from "../components/Projects/Projects";
import CustomCollapse from "../components/CustomCollapse";
import Footer from "../components/Footer/Footer";
import { Flex } from "antd";
class App extends Component {
  constructor() {
    super();
  }
  doScrolling = (elementY, duration) => {
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      var time = timestamp - start;
      var percent = Math.min(time / duration, 1);
      window.scrollTo(0, startingY + diff * percent);
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };
  render() {
    return (
      <div>
        <Navigation executeScroll={this.doScrolling} />
        <Info />
        <div style={{ background: "white", padding: "1rem" }}>
          <CardGroup />
        </div>

        <Flex gap={8} padding={12} style={{ margin: "2rem" }}></Flex>
        <Projects />
        <Footer />
      </div>
    );
  }
}
export default App;
