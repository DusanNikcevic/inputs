import Input from "./Input";
import React from "react";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: 0,
    list: [1, 2, 3, 4],
    counter: 0
  };
  listOne = [4, 5, 6, 7];

  mergeArrays = () => {
    this.setState(prevState => {
      return { list: [...prevState.list, ...this.listOne] };
    });
    this.setState(prevState => ({
      list: [...prevState.list, ...this.listOne]
    }));
  };

  handleInput = (name, value) => {
    this.setState({ [name]: value });
  };

  handleIncrease = () => {
    // this.setState({ counter: number + 1 });
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  componentDidMount() {
    this.mergeArrays();
  }

  render() {
    return (
      <div>
        <div className="inputs">
          <Input
            handleInput={this.handleInput}
            value={this.state.firstName}
            name="firstName"
          />
          <Input
            handleInput={this.handleInput}
            value={this.state.lastName}
            name="lastName"
          />
          <Input
            handleInput={this.handleInput}
            value={this.state.age}
            name="age"
          />
        </div>
        <ul>
          {this.state.list.map(e => {
            return <li>{e}</li>;
          })}
        </ul>
        <div className="counter">
          <button onClick={this.handleIncrease}>Increase</button>
          <h2>{this.state.counter}</h2>
        </div>
      </div>
    );
  }
}

export default App;
