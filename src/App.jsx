import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onChange = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("render");

    const onChange = () => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <h1>Lifecycle</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.onChange}>click</button>
      </div>
    );
  }
}

export default App;
