import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Info from '../components/Info/Info';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
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
  })
}
  render() {
    return (
      <div>
        <Navigation executeScroll={this.doScrolling}/>
        <Info />
        <Projects />
        <Footer />
      </div>
    )
  }
}
export default App;
