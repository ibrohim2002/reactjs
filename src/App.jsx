import React, { Component } from "react";
import "./main.jsx";
import Frame from "./Frame.jsx";
import { student } from "./student.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      status: this.props.surname,
      data: student,
      search: 'id',
    };
  }
  title = "hey";
  render() {
    const onchange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onFilter = (e) => {
      const {value} = e.target
      let res = student.filter((val) => {
        return `${val[this.state.search]}`.toLowerCase().includes(value.toLowerCase());
      });
      this.setState({
        data: res,
      });
    };

    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({ data: [user, ...this.state.data] ,name: "", status: ""});
    };

    const onSelect = e =>{
      console.log(e.target.value);
      this.setState({search: e.target.value})
    }
    return (
      <Frame>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.status}</h1>
        <h1>{this.props.children}</h1>
        <input value={this.state.name} name="name" onChange={onchange} />
        <input value={this.state.status} name="status" onChange={onchange} />
        <button onClick={onAdd}>add</button>
        <hr />
        <select onChange={onSelect} name="" id="">
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
        <input onChange={onFilter} type="text" />
        {this.state.data.length ? (
          this.state.data.map(({ id, name, status }) => {
            return (
              <h3 key={id}>
                {id} {name} {status}
                <button
                  onClick={() => onDelete(id)}
                  style={{ border: "1px red solid", margin: "10px" }}
                >
                  delete
                </button>
              </h3>
            );
          })
        ) : (
          <p>no data</p>
        )}
      </Frame>
    );
  }
}

export default App;
