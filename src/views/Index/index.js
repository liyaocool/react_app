import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import Home from "../Home/index";
import MyPlugin from "../MyPlugin/index";
import MyStyle from "../MyStyle/index";
import Mine from "../Mine/index";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

//列表菜单项
const FirstMenu = [
  {
    key: "sub1",
    title: "首页",
    icon: "home",
    SecondMenu: [
      {
        key: "1",
        title: "首页概览",
        icon: "pie-chart",
        path: "/Home"
      },
      {
        key: "2",
        title: "首页其他",
        icon: "tag-o",
        path: "/Home"
      }
    ]
  },
  {
    key: "sub2",
    title: "插件",
    icon: "pushpin-o",
    SecondMenu: [
      {
        key: "3",
        title: "插件概览",
        icon: "pie-chart",
        path: "/MyPlugin"
      },
      {
        key: "4",
        title: "插件其他",
        icon: "tag-o",
        path: "/MyPlugin"
      }
    ]
  },
  {
    key: "sub3",
    title: "样式",
    icon: "smile-o",
    SecondMenu: [
      {
        key: "5",
        title: "样式概览",
        icon: "pie-chart",
        path: "/MyStyle"
      },
      {
        key: "6",
        title: "样式其他",
        icon: "tag-o",
        path: "/MyStyle"
      }
    ]
  },
  {
    key: "sub4",
    title: "我的",
    icon: "rocket",
    SecondMenu: [
      {
        key: "7",
        title: "我的概览",
        icon: "pie-chart",
        path: "/Mine"
      },
      {
        key: "8",
        title: "我的其他",
        icon: "tag-o",
        path: "/Mine"
      }
    ]
  }
];
class SiderMenu extends Component {
  render() {
    // FirstItem 一级菜单遍历
    const MenuItem = FirstMenu.map(FirstItem => (
      <SubMenu
        key={FirstItem.key}
        title={
          <span>
            <Icon type={FirstItem.icon} />
            {FirstItem.title}
          </span>
        }
      >
        {/*  SecondItem 二级菜单遍历 */}
        {FirstItem.SecondMenu.map(SecondItem => (
          <Menu.Item key={SecondItem.key}>
            <NavLink to={{ pathname: SecondItem.path }}>
              <Icon type={SecondItem.icon} />
              {SecondItem.title}
            </NavLink>
          </Menu.Item>
        ))}
      </SubMenu>
    ));
    return (
      <Menu
        mode="inline"
        defaultOpenKeys={["sub1"]}
        defaultSelectedKeys={["1"]}
        style={{ height: "100%" }}
      >
        {MenuItem}
      </Menu>
    );
  }
}
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
                React Admin
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
            <Router basename="/Index">
              <Sider width={200} style={{ background: "#fff" }}>
                <SiderMenu />
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
