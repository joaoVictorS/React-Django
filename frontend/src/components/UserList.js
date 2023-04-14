import React from "react";
import List from "./List";
import Login from "./Login";

export default class UserList extends React.Component {
  state = { lists: [], loading: true };

  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["Authorization"] =
      "Token " + localStorage.getItem('token');
      
    var url = "http://127.0.0.1:8000/list/";
    const response = await fetch(url, config);
    const data = await response.json();
    this.setState({ lists: data, loading: false });
  }

  render() {
    const listApi = this.state.lists;
    const token = localStorage.getItem('token');

    if (!token) {
      return <Login />;
    } else {
      return (
        <div>
          {listApi.map((list) => (
            <List key={list.id} list_name={list.name} items={list.item_set} />
          ))}
        </div>
      );
    }
  }
}
