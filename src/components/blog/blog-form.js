import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };

    this.handleCahge = this.handleCahge.bind(this);
  }

  handleCahge(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input onChange={this.handleCahge} type="text" />
        <input type="text" />

        <button>Save</button>
      </form>
    );
  }
}
