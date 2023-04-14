import React from "react";
import List from "./List";

export default class UserList extends React.Component {
  state = { lists: null, loading: true };
  async componentDidMount() {
    var url = "http://127.0.0.1:8000/list/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ lists: data, loading: false });
  }

  render() {
    return (
      <div>
        <List list_name={"Minha Lista"} />
        <List list_name={"Minha Lista2"} />
      </div>
    );
  }
}
