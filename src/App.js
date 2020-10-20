import Input from "./Input";
import React from 'react';


class App extends React.Component {
  
  state = {
    firstName:"",
    lastName:"",
    age:0,
    list:[1,2,3,4]
  }
  listOne = [4,5,6,7];
  
  mergeArrays = ()=>{
    this.setState(prevState=>({
      list: [...prevState.list,...this.listOne]
    }));
  }
  
  handleInput= (name,value)=>{
    this.setState({[name]:value});
}
  
  componentDidMount() {
    this.handleInput();
  }
  
  render(){
    return (
      <div>
        <div className="inputs">
          <Input handleInput={this.handleInput} value={this.state.firstName} name="firstName"/>
          <Input handleInput={this.handleInput} value={this.state.lastName} name="lastName"/>
          <Input handleInput={this.handleInput} value={this.state.age} name="age"/>
        </div>
        <ul>
          {this.state.list.map(e=>{
            return <li>{e}</li>
          })}
        </ul>
      </div>


    );
  }
}

export default App;
