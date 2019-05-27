import React, { Component } from "react";
import Home from "./views/Home/index";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }
  render() {
    return <Home date={this.state.date} />
  }
}

export default App;
