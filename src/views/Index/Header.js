import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

export default class Header extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to={{ pathname: "/", params: { abc: "abc" } }}>
              REACT DOME
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={{ pathname: "/User", params: { abc: "abc" } }}>用户</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
