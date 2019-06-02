import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import Home from "../Home/index";
import MyPlugin from "../MyPlugin/index";
import MyStyle from "../MyStyle/index";
import Mine from "../Mine/index";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Index extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <Layout>
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
              <Link to={{ pathname: "/User", params: { abc: "abc" } }}>
                用户
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>

          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Router basename='/Index'>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        首页
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <NavLink
                        to={{ pathname: "/Home", params: { abc: "abc" } }}
                      >
                        首页概览
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">首页其他</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="user" />
                        插件
                      </span>
                    }
                  >
                    <Menu.Item key="3">
                      <NavLink
                        to={{ pathname: "/MyPlugin", params: { abc: "abc" } }}
                      >
                        插件概览
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">插件其他</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Route path="/Home" component={Home} />
                <Route path="/MyPlugin" component={MyPlugin} />
                <Route path="/MyStyle" component={MyStyle} />
                <Route path="/Mine" component={Mine} />
              </Content>
            </Router>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Design by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/liyaocool"
          >
            liyaocool
          </a>
        </Footer>
      </Layout>
    );
  }
}
